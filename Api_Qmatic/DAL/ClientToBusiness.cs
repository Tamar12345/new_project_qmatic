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
    
    public partial class ClientToBusiness
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public ClientToBusiness()
        {
            this.Turns = new HashSet<Turns>();
        }
    
        public string clientId { get; set; }
        public decimal businessCode { get; set; }
        public bool confirmationStatus { get; set; }
    
        public virtual Business Business { get; set; }
        public virtual Business Business1 { get; set; }
        public virtual Clients Clients { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Turns> Turns { get; set; }
    }
}