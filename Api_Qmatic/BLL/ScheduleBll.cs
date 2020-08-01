using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities;
using DAL;
using System.Data.Entity;

namespace BLL
{
    public class ScheduleBll
    {
        QmaticEntities2 db = new QmaticEntities2();
        //public List<Schedule> GetSchedule(DateTime date, int codeBusiness)
        //{
        //    List<Schedule> schedules = new List<Schedule>();
        //    List<ActionTime> actionTimes = db.ActionTime.Where(a => a.businessCode == codeBusiness).ToList();
        //    TimeSpan start, time;

        //    int allTime, minDurationTurn;
        //    minDurationTurn = (int)db.Business.First(c => c.code == codeBusiness).minDurationTurn;
        //    actionTimes.ForEach(c =>
        //    {

        //        start = (TimeSpan)c.Times.startHour;
        //        time = ((TimeSpan)c.Times.endHour).Subtract(start);
        //        allTime = time.Hours*60 + time.Minutes;
        //        for (int i = 0; i < (allTime / minDurationTurn); i++)
        //        {
        //            schedules.Add(new Schedule() { Date = date.AddDays((int)c.day - 1), StartHour = ((TimeSpan)c.Times.startHour).Add(new TimeSpan(0, minDurationTurn * i, 0)), State = eState.free});
        //        }
        //    }
        //    );
        //    return schedules;
        //}
        public Dictionary<int, List<Schedule>> GetSchedule(DateTime ruleDate, int codeBusiness)
        {
            Dictionary<int, List<Schedule>> schedules = new Dictionary<int, List<Schedule>>();
            List<ActionTime> actionTimes = db.ActionTime.Where(a => a.businessCode == codeBusiness).ToList();
            TimeSpan start, time;
            DateTime date = ruleDate.Date;

            int day_of_date = (int)date.DayOfWeek + 1;
            schedules.Add(7, new List<Schedule>());
            schedules.Add(6, new List<Schedule>());
            schedules.Add(3, new List<Schedule>());
            schedules.Add(4, new List<Schedule>());
            schedules.Add(5, new List<Schedule>());
            schedules.Add(2, new List<Schedule>());
            schedules.Add(1, new List<Schedule>());
            int allTime, minDurationTurn;

            minDurationTurn = (int)db.Business.First(c => c.code == codeBusiness).minDurationTurn;
            //create base time table
            actionTimes.ForEach(c =>
            {
                start = (TimeSpan)c.Times.startHour;
                time = ((TimeSpan)c.Times.endHour).Subtract(start);
                allTime = time.Hours * 60 + time.Minutes;

                for (int i = 0; i < (allTime / minDurationTurn); i++)
                {
                    schedules[Convert.ToInt32(c.day)].Add(new Schedule() { ClientId = null, Date = date.AddDays((7 - (day_of_date - (int)c.day)) % 7), StartHour = ((TimeSpan)c.Times.startHour).Add(new TimeSpan(0, minDurationTurn * i, 0)), State = eState.free });
                }
            }
            );
            //change to range of the current business
            DateTime rule_add_week = date.AddDays(7);
            DateTime add_week = rule_add_week.Date;

            List<Cancellation> cancellation = db.Cancellation.Where(c => c.BusinessCode == codeBusiness && date <= (c.cancelDate) && add_week >= (c.cancelDate)).ToList();//check date in rabge week
            List<Holidays> holidays = db.Holidays.Where(c => date <= (c.foreignDate) && add_week >= (c.foreignDate)).ToList();
            /*CHECK*/
            List<Turns> turns = db.Turns.Where(p => p.businessCode == codeBusiness && date.Date <= ((p.turnDate)) && add_week.Date >= ((p.turnDate))).ToList();
            for (int i = 0; i < turns.Count; i++)
            {
                if (cancellation.Any(o => o.BusinessCode == turns[i].businessCode && o.cancelDate == turns[i].turnDate && turns[i].hour == o.cancelHour))
                    turns.RemoveAt(i);
            }


            List<AddCancelTime> cancelTime = db.AddCancelTime.Where(p => p.status == false && p.businessCode == codeBusiness && ruleDate <= DbFunctions.TruncateTime(p.date) && rule_add_week >= DbFunctions.TruncateTime(p.date)).ToList();
            List<AddCancelTime> addTimes = db.AddCancelTime.Where(p => p.status == true && p.businessCode == codeBusiness && ruleDate <= DbFunctions.TruncateTime(p.date) && rule_add_week >= DbFunctions.TruncateTime(p.date)).ToList();
            List<List<Holidays>> holidays_days_of_week = new List<List<Holidays>>(7);
            for (int i = 0; i < 7; i++)
            {
                holidays_days_of_week.Add(new List<Holidays>());
            }
            holidays.ForEach(h => holidays_days_of_week[(int)((DateTime)h.foreignDate).DayOfWeek].Add(h));
            addTimes.ForEach(c =>
            {
                start = (TimeSpan)c.startHour;
                time = ((TimeSpan)c.endHour).Subtract(start);
                allTime = time.Hours * 60 + time.Minutes;
                for (int i = 0; i < (allTime / minDurationTurn); i++)
                {
                    schedules[(int)((DateTime)c.date).DayOfWeek + 1].Add(new Schedule() { Date = date.AddDays((7 - (day_of_date - (int)((DateTime)c.date).DayOfWeek)) % 7), StartHour = ((TimeSpan)c.startHour).Add(new TimeSpan(0, minDurationTurn * i, 0)), State = eState.free });
                }
            }
           );
            for (int i = 1; i <= 7; i++)
            {
                schedules[i].ForEach(p =>
                {
                    if (turns.Any(t => t.hour.Equals(p.StartHour) && ((DateTime)t.turnDate).Date == p.Date.Date))
                    {
                        p.State = eState.busy;
                        p.ClientId = (turns.FirstOrDefault(t => t.hour.Equals(p.StartHour) && ((DateTime)t.turnDate).Date == p.Date.Date)).clientId;
                    }
                    if (cancellation.Any(c => c.cancelHour.Equals(p.StartHour) && ((DateTime)c.cancelDate).Date == p.Date.Date))
                    {
                        p.State = eState.clientCanceled;
                    }
                    if (cancelTime.Any(o => o.startHour <= p.StartHour && o.endHour >= p.StartHour && p.StartHour < o.endHour && p.Date.Date == ((DateTime)o.date).Date))
                        p.State = eState.businessCanceled;
                    holidays_days_of_week[i - 1].ForEach(h =>
                      {
                          if (((DateTime)h.foreignDate).Date == p.Date.Date)
                              p.State = eState.businessCanceled;
                      });
                });
            }
            //disable set an appointment less than 2 hours before
            schedules[day_of_date].ForEach(s =>
            {
                if (s.State == eState.free && s.StartHour.Hours < DateTime.Now.Hour + 2 && s.Date.Date == (DateTime.Today))
                    s.State = eState.businessCanceled;

            });
            int[] arr = { 8, 9, 10, 11, 12, 13, 14 };
            int index = (8 - day_of_date) % 7;
            for (int i = 0; i < 7; i++)
            {
                schedules.Add(arr[index % 7], schedules[i + 1]);
                index++;
            }
            for (int i = 0; i < 7; i++)
                schedules.Remove(i + 1);
            return schedules;
        }

        public List<Times1> getTimes(int minDuration)
        {
            try
            {
                //return Times1.CastToEntities(db.Times.Where(t => ((TimeSpan)t.startHour).Subtract((TimeSpan)t.endHour).TotalMinutes % minDuration == 0).ToList());
                return Times1.CastToEntities(db.Times.ToList());
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public bool SaveTimes(List<Times1> times1s)
        {
            try
            {
                db.Times.AddRange(Times1.CastToDal(times1s.Where(t=> t.isNew).ToList()));
                db.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public int Order(Schedule schedule)
        {
            try
            {
                if (schedule.State == eState.busy)
                    return 0;
                else
                {
                    db.Turns.Add(new Turns {businessCode = SessionManager.BOwnerId.code, clientId = SessionManager.UserId, turnDate = schedule.Date, hour = schedule.StartHour });
                    //db.ActionToBusiness.Add{ }
                    db.SaveChanges();
                    return 1;
                }
            }
            catch (Exception)
            {
                return 0;
            }
        }
    }
}
