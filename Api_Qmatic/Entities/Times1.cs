using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class Times1
    {
        public int code { get; set; }
        public TimeSpan startHour { get; set; }
        public TimeSpan endHour { get; set; }
        public bool isNew { get; set; }

        public static Times CastToDal(Times1 times)
        {
            try
            {
                return new Times() { code = times.code, endHour = times.endHour, startHour = times.startHour };
            }
            catch (Exception)
            {

                return null;
            }
        }

        public static List<Times> CastToDal(List<Times1> lstB)
        {
            List<Times> lstTimes = new List<Times>();
            foreach (var item in lstB)
            {
                lstTimes.Add(CastToDal(item));
            }
            return lstTimes;
        }

        public static Times1 CastToEntities(Times times)
        {
            try
            {
                return new Times1() {isNew = false ,code = (int)times.code, endHour = (TimeSpan)times.endHour, startHour = (TimeSpan)times.startHour };
            }
            catch (Exception)
            {

                return null;
            }
        }

        public static List<Times1> CastToEntities(List<Times> lstB)
        {
            List<Times1> lstTimes = new List<Times1>();
            foreach (var item in lstB)
            {
                lstTimes.Add(CastToEntities(item));
            }
            return lstTimes;
        }
    }
}
