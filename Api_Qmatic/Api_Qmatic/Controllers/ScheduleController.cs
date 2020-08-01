 using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BLL;
using Entities;

namespace Api_Qmatic.Controllers
{  
    public class ScheduleController : ApiController
    {
        ScheduleBll scheduleBll = new ScheduleBll();
        // GET: api/Schedule
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Schedule/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Schedule
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Schedule/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Schedule/5
        public void Delete(int id)
        {
        }

        [Route("api/Schedule/GetSchedule")]
        public Dictionary<int, List<Schedule>> GetSchedule(DateTime date)
        {
            int codeBusiness = SessionManager.BOwnerId.code;
            return scheduleBll.GetSchedule(date, codeBusiness);
        }

        [HttpPost]
        [Route ("api/Schedule/Order")]
        public int Order(Schedule s)
        {
            return scheduleBll.Order(s);
        }

        [HttpPost]
        [Route("api/Schedule/SaveTimes")]
        public bool SaveTimes(List<Times1> times1s)
        {
            return scheduleBll.SaveTimes(times1s);
        }

        [HttpGet]
        [Route("api/Schedule/GetTimes/{minDuration}/")]
        public List<Times1> getTimes(int minDuration)
        {
            return scheduleBll.getTimes(minDuration);
        }
    }
}
