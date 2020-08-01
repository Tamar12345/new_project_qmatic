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
    public class ClientController : ApiController
    {
        ClientBll clientBll = new ClientBll();

        [HttpGet]
        [Route("api/Client/ConfirmClient/{id}/")]
        public bool ConfirmClient(string id)
        {
            return clientBll.ConfirmClient(id);
        }

        [HttpGet]
        [Route("api/Client/DeclineClient/{id}/")]
        public bool DeclineClient(string id)
        {
            return clientBll.DeclineClient(id);
        }

        [Route("api/Client/GetCurrentClient")]
        public Client GetCurrentClient()
        {
            return clientBll.GetCurrentClient();
        }

        //Save basic details for client
        // POST: api/Client/SaveBaseDetails{clientUser}
        [HttpPost]
        [Route("api/Client/SignUp")]
        public bool SignUp(Client clientUser)
        {
            return clientBll.SignUp(clientUser);
        }

        [HttpPost]
        [Route("api/Client/LogIn")]
        public Client LogIn(Client clientUser)
        {
            Client v = clientBll.LogIn(clientUser);
            return v;
        }


        [Route("api/Client/GetWaitingClientsToBusiness")]
        public List<Client> GetWaitingClientsToBusiness()
        {
            return clientBll.GetClientsToBusiness(false);
        }
        [Route("api/Client/GetClientsToBusiness")]
        public List<Client> GetClientsToBusiness()
        {
            return clientBll.GetClientsToBusiness(true);
        }
        [HttpGet]
        [Route("api/Client/CheckRegister")]
        public bool CheckRegister()
        {
            return clientBll.CheckRegister("");
        }
    }
}
