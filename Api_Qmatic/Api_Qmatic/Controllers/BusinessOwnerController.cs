
using BLL;
using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;


namespace Api_Qmatic.Controllers
{
    public class BusinessOwnerController : ApiController
    {
        BusinessOwnerBll businessOwnerBll = new BusinessOwnerBll();
        // GET: api/BusinessOwner
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/BusinessOwner/5
        public string Get(int id)
        {
            return "value";
        }

        //POST: api/BusinessOwner
        public void Post([FromBody]string value)
        {
        }

        //PUT: api/BusinessOwner/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/BusinessOwner/5
        public void Delete(int id)
        {
        }
        [HttpPost]
        [Route("api/BusinesssOwner/SignUp")]
        public bool SignUp(BusinesssOwner businesssOwner)
        {
            return businessOwnerBll.SignUp(businesssOwner);
        }

        [HttpGet]
        [Route("api/BusinesssOwner/saveCurrentBusiness")]
        public bool saveCurrentBusiness(string code)
        {
            businessOwnerBll.saveCurrentBusiness(code);
            return true;
        }


        //[HttpPost]
        [Route("api/BusinessOwner/LogIn")]
        public bool LogIn(BusinesssOwner businesssOwner)
        {
            return businessOwnerBll.LogIn(businesssOwner);
        }

        [Route("api/BusinessOwner/GetBusinessName")]
        public List<BusinesssOwner> GetBusinessName()
        {
            return businessOwnerBll.GetBusinessName();
        }

        [Route("api/BusinessOwner/GetCurrentBusiness")]
        public BusinesssOwner GetCurrentBusiness()
        {
            return businessOwnerBll.GetCurrentBusiness();
        }

        [HttpGet]
        [Route("api/BusinesssOwner/getCurretnBOwnerToCertificate")]
        public BusinesssOwner getCurretnBOwnerToCertificate(string email)
        {
            return businessOwnerBll.getCurretnBOwnerToCertificate(email);
        }


        [HttpPost]
        [Route("api/BusinesssOwner/confirmCurretnBOwner")]
        public bool confirmCurretnBOwner(BusinesssOwner bOwner)
        {
            return businessOwnerBll.confirmCurretnBOwner(bOwner);
        }


        [HttpPost]
        [Route("api/BusinesssOwner/SaveAll")]
        public bool SaveAll(BusinesssOwner bOwner)
        {
            return businessOwnerBll.SaveAll(bOwner);
        }

        [HttpPost]
        [Route("api/BusinesssOwner/rejectCurretnBOwner")]
        public bool rejectCurretnBOwner(BusinesssOwner bOwner)
        {
            return businessOwnerBll.rejectCurretnBOwner(bOwner);
        }

        [HttpPost]
        [Route("api/BusinesssOwner/UploadLogo")]
        public string UploadLogo()
        {
            System.Web.HttpRequest httpRequest = HttpContext.Current.Request;
            System.Web.HttpPostedFile postedFile = httpRequest.Files["Image"];
            if (postedFile != null)
            {
                string filePath = HttpContext.Current.Server.MapPath("~/Images/" + postedFile.FileName);
                postedFile.SaveAs(filePath);
                return postedFile.FileName;
            }
            return null;

        }
    }
}
