using DAL;
using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{

    public class BusinessOwnerBll
    {
        static QmaticEntities2 db = new QmaticEntities2();
        public List<BusinesssOwner> GetBusinessName()
        {
            return BusinesssOwner.CastBusinessOwner(db.Business.ToList());
        }



        public bool SignUp(BusinesssOwner businesssOwner)
        {
            bool isExist = db.Business.Any(b => b.email.Equals(businesssOwner.email));
            if (!isExist && SendEmailToCompleteRegister(businesssOwner))
            {
                db.Business.Add(BusinesssOwner.CastBusiness(businesssOwner));
                db.SaveChanges();
                return true;
            }
            return false;
        }
        private static string RandomPassword()
        {
            string password = "";
            do
            {
                Random rnd = new Random();
                int length_of_Password = rnd.Next(4, 9);
                int type;
                for (int i = 0; i < length_of_Password; i++)
                {
                    type = rnd.Next(3);
                    if (type == 1)
                        password += (char)rnd.Next(48, 57);
                    else
                    {
                        if (type == 2)
                            password += (char)rnd.Next(65, 90);
                        else
                            password += (char)rnd.Next(97, 122);
                    }
                }
            } while (db.Clients.Any(c => c.password.Equals(password)) || db.Business.Any(b => b.password.Equals(password)));
            return password;
        }

        public void saveCurrentBusiness(string code1)
        {
            int code = Convert.ToInt32(code1);
            SessionManager.BOwnerId = BusinesssOwner.CastBusinessOwner(db.Business.First(b => b.code == code));
        }
        public BusinesssOwner GetCurrentBusiness()
        {
            try
            {
                int code = SessionManager.BOwnerId.code;
                return BusinesssOwner.CastBusinessOwner(db.Business.FirstOrDefault(b => b.code == code));
            }
            catch (Exception)
            {
                return null;
            }
        }

        public bool LogIn(BusinesssOwner businesssOwner)
        {
            try
            {
               Business businesss = db.Business.FirstOrDefault(b => b.email == businesssOwner.email && b.password == businesssOwner.password);
               SessionManager.BOwnerId = BusinesssOwner.CastBusinessOwner(businesss);
                return businesss != null;
            }
            catch (Exception)
            {

                return false;
            }
        }

        public bool SaveAll(BusinesssOwner bOwner)
        {
            int code = SessionManager.BOwnerId.code;
            Business business = db.Business.FirstOrDefault(b => b.code == code);
            //Business business = db.Business.FirstOrDefault(b => b.code == bOwner.code);
            try
            {
                business.cancelledTurnColor = bOwner.cancelledTurnColor;
                business.freeTurnColor = bOwner.freeTurnColor;
                business.takenTurnColor = bOwner.takenTurnColor;
                business.tableColor = bOwner.tableColor;
                business.backGroundColor = bOwner.backGroundColor;
                business.fontColor = bOwner.fontColor;
                business.logo = bOwner.logo;
                db.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        private bool SendEmailToCompleteRegister(BusinesssOwner businesssOwner)
        {
            string newPassword = RandomPassword();
            businesssOwner.password = newPassword;
            //לממש
            return SendEmail(businesssOwner, newPassword);
        }
        private static bool SendEmail(BusinesssOwner businesssOwner, string newPassword)
        {
            try
            {
                string smtpAddress = "smtp.gmail.com";
                int portNumber = 587;
                bool enableSSL = true;
                string emailFrom = "qmatic.2019@gmail.com";
                string password = "CHENTAMAR2019";
                string emailTo = businesssOwner.email;
                string subject = "QMATIC-you are welcome in";
                string body = "hello " + businesssOwner.ownerName +
                    "your password is " + newPassword +
                    " to start your private site";

                string sURL = "http://localhost:4200/SetUp?Email=" + Uri.EscapeDataString(businesssOwner.email);
                body += "click <a href='" + sURL + "'>here</a> ";

                using (MailMessage mail = new MailMessage())
                {
                    //mail.ReplyTo = new MailAddress("no-reply@qmatic.org");
                    mail.From = new MailAddress(emailFrom, "QMATIC");
                    mail.To.Add(emailTo);
                    //mail.Sender = new MailAddress("support@qmatic.org");
                    mail.Subject = subject;
                    mail.Body = body;
                    mail.IsBodyHtml = true;
                    // attach file
                    //string attachmentFilename = "c://file.pdf";
                    // mail.Attachments.Add(new Attachment(attachmentFilename));
                    using (SmtpClient smtp = new SmtpClient(smtpAddress, portNumber))
                    {
                        smtp.Credentials = new NetworkCredential(emailFrom, password);
                        smtp.EnableSsl = enableSSL;
                        smtp.Send(mail);
                    }
                }
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public bool rejectCurretnBOwner(BusinesssOwner bOwner)
        {
            try
            {
                db.Business.Remove(db.Business.First(c => c.email.Equals(bOwner.email)));
                db.SaveChanges();
                SendEmailToBOwner(false, bOwner);
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }

        public bool confirmCurretnBOwner(BusinesssOwner bOwner)
        {
            try
            {
                db.Business.First(b => b.email.Equals(bOwner.email)).completeRegistration = true;
                db.SaveChanges();
                SendEmailToBOwner(true, bOwner);
                return true;
            }
            catch (Exception)
            {
                return false;
            }

        }




        public BusinesssOwner getCurretnBOwnerToCertificate(string email)
        {
            try
            {
                return BusinesssOwner.CastBusinessOwner(db.Business.First(b => b.email.Equals(email)));

            }
            catch (Exception)
            {
                return null;

            }
        }


        private void SendEmailToBOwner(bool v, BusinesssOwner businesssOwner)
        {
            try
            {
                string smtpAddress = "smtp.gmail.com";
                int portNumber = 587;
                bool enableSSL = true;
                string emailFrom = "qmatic.2019@gmail.com";
                string password = "CHENTAMAR2019";
                string emailTo = businesssOwner.email;
                string subject = "QMATIC";
                string body = "";
                string sURL = "";
                if (v)
                {
                    sURL = "http://localhost:4200/NewUserCertificate?Email=" + Uri.EscapeDataString(businesssOwner.email);
                    body += "click <a href='" + sURL + "'>here</a> ";
                }
                else
                {

                }
                using (MailMessage mail = new MailMessage())
                {
                    //mail.ReplyTo = new MailAddress("no-reply@qmatic.org");
                    mail.From = new MailAddress(emailFrom, "QMATIC");
                    mail.To.Add(emailTo);
                    //mail.Sender = new MailAddress("support@qmatic.org");
                    mail.Subject = subject;
                    mail.Body = body;
                    mail.IsBodyHtml = true;
                    // attach file
                    //string attachmentFilename = "c://file.pdf";
                    // mail.Attachments.Add(new Attachment(attachmentFilename));
                    using (SmtpClient smtp = new SmtpClient(smtpAddress, portNumber))
                    {
                        smtp.Credentials = new NetworkCredential(emailFrom, password);
                        smtp.EnableSsl = enableSSL;
                        smtp.Send(mail);
                    }
                }

            }
            catch (Exception)
            {

            }
        }
    }
}