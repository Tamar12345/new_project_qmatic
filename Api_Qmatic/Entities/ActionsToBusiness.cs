using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    class ActionsToBusiness
    {
        public int code { get; set; }
        public int businessCode { get; set; }
        public string ActionName { get; set; }
        public int duration { get; set; }

        public static ActionsToBusiness CastToEntities(ActionToBusiness actionToBusiness)
        {
            if (actionToBusiness == null)
            {
                return null;
            }
            return new ActionsToBusiness()
            {
                ActionName = actionToBusiness.ActionName,
                businessCode = Convert.ToInt32(actionToBusiness.businessCode),
                code = Convert.ToInt32(actionToBusiness.code),
                duration = Convert.ToInt32(actionToBusiness.duration)
            };
        }

        public static ActionToBusiness CastToDal(ActionsToBusiness actionToBusiness)
        {
            if (actionToBusiness == null)
            {
                return null;
            }
            return new ActionToBusiness()
            {
                ActionName = actionToBusiness.ActionName,
                businessCode = Convert.ToInt32(actionToBusiness.businessCode),
                code = Convert.ToInt32(actionToBusiness.code),
                duration = Convert.ToInt32(actionToBusiness.duration)
            };
        }

        public static List<ActionsToBusiness> CastListToEntities(List<ActionToBusiness> actionTos)
        {
            if (actionTos == null) { return null; }
            List<ActionsToBusiness> lstActions = new List<ActionsToBusiness>();
            foreach (ActionToBusiness item in actionTos)
            {
                lstActions.Add(CastToEntities(item));
            }
            return lstActions;
        }

        public static List<ActionToBusiness> CastListToDal(List<ActionsToBusiness> actionTos)
        {
            if (actionTos == null) { return null; }
            List<ActionToBusiness> lstActions = new List<ActionToBusiness>();
            foreach (ActionsToBusiness item in actionTos)
            {
                lstActions.Add(CastToDal(item));
            }
            return lstActions;
        }

      
    }
}
