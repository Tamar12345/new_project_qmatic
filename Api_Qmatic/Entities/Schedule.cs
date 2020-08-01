using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public enum eState { busy, free, clientCanceled, businessCanceled }

    public class Schedule
    {
        public DateTime Date { get; set; }
        public TimeSpan StartHour { get; set; }
        public TimeSpan EndHour { get; set; }
        public eState State { get; set; }
        public string ClientId { get; set; }
    }
}
