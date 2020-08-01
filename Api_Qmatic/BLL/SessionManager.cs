using DAL;
using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.SessionState;

namespace BLL
{
    public static class SessionManager
    {
        public static string UserId
        {

            get
            {
                if (HttpContext.Current.Session != null && HttpContext.Current.Session["UserId"] != null)
                    return HttpContext.Current.Session["UserId"].ToString();
                return "";
            }

            set
            {
                if (HttpContext.Current.Session != null)
                    HttpContext.Current.Session["UserId"] = value;
            }
        }

        public static BusinesssOwner BOwnerId
        {
            get
            {
                if (HttpContext.Current.Session != null && HttpContext.Current.Session["BOwnerId"] != null)
                    return (BusinesssOwner)HttpContext.Current.Session["BOwnerId"];
                return null;
            }

            set
            {
                if (HttpContext.Current.Session != null)
                    HttpContext.Current.Session["BOwnerId"] = value;
            }
        }


    }
}
