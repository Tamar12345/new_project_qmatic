using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DAL;


namespace Entities
{
    public class BusinesssOwner
    {
        public int code { get; set; }
        public string businessName { get; set; }
        public string description { get; set; }
        public string logo { get; set; }
        public string fontColor { get; set; }
        public string backGroundColor { get; set; }
        public string tableColor { get; set; }
        public string freeTurnColor { get; set; }
        public string takenTurnColor { get; set; }
        public string cancelledTurnColor { get; set; }
        public string clientCancellationsColor { get; set; }
        
        public string street { get; set; }
        public string numHouse { get; set; }
        public string city { get; set; }
        public int experience { get; set; }
        public string email { get; set; }
        public string phoneNumber { get; set; }
        public int minDurationTurn { get; set; }
        public int rangeEnablingTurn { get; set; }
        public string password { get; set; }
        public string ownerName { get; set; }
        public bool completeRegistration { get; set; }
        public int maxTurnstoClient { get; set; }


        public static Business CastBusiness(BusinesssOwner b)
        {
            return new Business() { clientCancellationsColor = b.clientCancellationsColor, backGroundColor = b.backGroundColor, businessName = b.businessName, cancelledTurnColor = b.cancelledTurnColor, city = b.city, email = b.email, takenTurnColor = b.takenTurnColor, tableColor = b.tableColor, street = b.street, rangeEnablingTurn = b.rangeEnablingTurn, phoneNumber = b.phoneNumber, password = b.password, ownerName = b.ownerName, numHouse = b.numHouse, minDurationTurn = b.minDurationTurn, maxTurnstoClient = b.maxTurnstoClient, logo = b.logo, freeTurnColor = b.freeTurnColor, fontColor = b.fontColor, experience = b.experience, description = b.description, completeRegistration = b.completeRegistration, code = b.code };
        }
        public static List<Business> CastBusiness(List<BusinesssOwner> lstB)
        {
            List<Business> lstBusiness = new List<Business>();
            foreach (var item in lstB)
            {
                lstBusiness.Add(CastBusiness(item));
            }
            return lstBusiness;
        }
        public static BusinesssOwner CastBusinessOwner(Business b)
        {
            try
            {
                return new BusinesssOwner() { clientCancellationsColor = b.clientCancellationsColor, backGroundColor = b.backGroundColor, businessName = b.businessName, cancelledTurnColor = b.cancelledTurnColor, city = b.city, email = b.email, takenTurnColor = b.takenTurnColor, tableColor = b.tableColor, street = b.street, rangeEnablingTurn = int.Parse(b.rangeEnablingTurn.ToString()), phoneNumber = b.phoneNumber, password = b.password, ownerName = b.ownerName, numHouse = b.numHouse, minDurationTurn = int.Parse(b.minDurationTurn.ToString()), maxTurnstoClient = int.Parse(b.maxTurnstoClient.ToString()), logo = b.logo, freeTurnColor = b.freeTurnColor, fontColor = b.fontColor, experience = int.Parse(b.experience.ToString()), description = b.description, completeRegistration = bool.Parse(b.completeRegistration.ToString()), code = int.Parse(b.code.ToString()) };

            }
            catch (Exception)
            {

                return null;
            }
        }
        public static List<BusinesssOwner> CastBusinessOwner(List<Business> lstB)
        {
            List<BusinesssOwner> lstBusiness = new List<BusinesssOwner>();
            foreach (var item in lstB)
            {
                lstBusiness.Add(CastBusinessOwner(item));
            }
            return lstBusiness;
        }

    }
}