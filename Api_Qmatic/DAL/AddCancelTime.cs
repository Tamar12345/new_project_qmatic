//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class AddCancelTime
    {
        public decimal code { get; set; }
        public Nullable<decimal> businessCode { get; set; }
        public Nullable<System.TimeSpan> startHour { get; set; }
        public Nullable<System.TimeSpan> endHour { get; set; }
        public Nullable<System.DateTime> date { get; set; }
        public Nullable<bool> status { get; set; }
    
        public virtual Business Business { get; set; }
    }
}
