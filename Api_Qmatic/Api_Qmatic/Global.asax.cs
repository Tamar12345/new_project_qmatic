using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Routing;
using System.Web.SessionState;

namespace Api_Qmatic
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);
            var session = HttpContext.Current.Session;
        }


        protected void Application_PostAuthorizeRequest()
        {
            //if (IsWebApiRequest())
            //{
                HttpContext.Current.SetSessionStateBehavior(SessionStateBehavior.Required);
            //}
        }

        private bool IsWebApiRequest()
        {
            return HttpContext.Current.Request.AppRelativeCurrentExecutionFilePath.StartsWith(WebApiConfig.UrlPrefixRelative);
        }

    }
}
