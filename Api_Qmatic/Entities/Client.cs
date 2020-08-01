using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Entities
{
    public class Client
    {
        public string id { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string street { get; set; }
        public string city { get; set; }
        public string Email { get; set; }
        public string phoneNumber { get; set; }
        public string password { get; set; }

        public static Clients CastClient(Client c)
        {
            return new Clients() { id = c.id, firstName = c.firstName, lastName = c.lastName, street = c.street, city = c.city, Email = c.Email, password = c.password, phoneNumber = c.phoneNumber };
        }
        public static List<Clients> CastClient(List<Client> lstC)
        {
            List<Clients> lstClients = new List<Clients>();
            foreach (var item in lstC)
            {
                lstClients.Add(CastClient(item));
            }
            return lstClients;
        }
        public static Client CastClients(Clients c)
        {
            if (c == null)
                return null;
            return new Client() { id = c.id, firstName = c.firstName, lastName = c.lastName, street = c.street, city = c.city, Email = c.Email, password = c.password, phoneNumber = c.phoneNumber };
        }
        public static List<Client> CastClients(List<Clients> lstC)
        {
            List<Client> lstClients = new List<Client>();
            foreach (var item in lstC)
            {
                lstClients.Add(CastClients(item));
            }
            return lstClients;
        }
    }
}