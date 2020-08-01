using Entities;
using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net.Mail;
using System.Net;

namespace BLL
{
    public class ClientBll
    {
        static QmaticEntities2 db = new QmaticEntities2();
        public bool IsClientExist(Client clientUser)
        {
            try
            {
                return db.Clients.Any(b => b.Email.Equals(clientUser.Email) || b.id.Equals(clientUser.id));
            }
            catch (Exception)
            {
                return false;
            }
        }

        public bool ConfirmClient(string id)
        {
            int businessCode = SessionManager.BOwnerId.code;
            try
            {
                db.ClientToBusiness.First(c => c.clientId == id && c.businessCode == businessCode).confirmationStatus = true;
                db.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public Client GetCurrentClient()
        {
            try
            {
                string userId = SessionManager.UserId;
                return Client.CastClients(db.Clients.FirstOrDefault(c => c.id == userId));
            }
            catch (Exception)
            {
                return null;
            }
        }

        public bool DeclineClient(string id)
        {
            int businessCode = SessionManager.BOwnerId.code;
            try
            {
                db.ClientToBusiness.Remove(db.ClientToBusiness.First(c => c.clientId == id && c.businessCode == businessCode));
                db.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public bool SignUp(Client clientUser)
        {
            /*
             * Check same email address and ID - Done
             */
            bool isClientExist = IsClientExist(clientUser);

            if (!isClientExist)
            {
                string password = SendEmail(clientUser.Email, clientUser.firstName);
                //if(password!="")
                //{ 
                clientUser.password = password;
                db.Clients.Add(Client.CastClient(clientUser));
                db.SaveChanges();
            }

            //}
            return !isClientExist;
        }


        public List<Client> GetClientsToBusiness(bool confirmed)
        {
            int businessCode = SessionManager.BOwnerId.code;
            List<Clients> dd = new List<Clients>();
            List<ClientToBusiness> a = db.ClientToBusiness.Where(c => c.businessCode == businessCode && c.confirmationStatus == confirmed).ToList();
            foreach (ClientToBusiness item in a)
            {
                dd.AddRange(db.Clients.Where(c => item.clientId == c.id).ToList());
            }
            return Client.CastClients(dd);
        }

        public Client LogIn(Client clientUser)
        {
            try
            {
                Clients client = db.Clients.FirstOrDefault(b => b.Email == clientUser.Email && b.password == clientUser.password);
                if (client != null)
                    SessionManager.UserId = client.id;
                return Client.CastClients(client);
            }
            catch (Exception)
            {

                return null;
            }
        }

        private static string SendEmail(string email, string name)
        {
            string Clientpassword = "";
            try
            {
                Clientpassword = RandomPassword();
                string smtpAddress = "smtp.gmail.com";
                int portNumber = 587;
                bool enableSSL = true;
                string emailFrom = "qmatic.2019@gmail.com";
                string password = "CHENTAMAR2019";
                string emailTo = email;
                string subject = "Hi " + name + ", Welcome to QMATIC";

                string body = "your password is " + Clientpassword + '\n';
                body += "click <a href='http://localhost:4200/newPassword'>here</a> to reset your password";

                using (MailMessage mail = new MailMessage())
                {
                    mail.ReplyTo = new MailAddress("no-reply@qmatic.org", "QMATIC");
                    mail.From = new MailAddress(emailFrom, "QMATIC");
                    mail.To.Add(emailTo);
                    mail.Sender = new MailAddress("support@qmatic.org", "QMATIC");

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
                //password = "";
                return Clientpassword;
            }
            catch (Exception)
            {
                return Clientpassword;
            }
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


        public bool CheckRegister(string businessCode)
        {
            try
            {
                int codeB = SessionManager.BOwnerId.code;
                string clientId = SessionManager.UserId;
                return db.ClientToBusiness.Any(c => c.clientId.Equals(clientId) && c.businessCode == codeB);
            }
            catch (Exception)
            {

                return false;
            }

        }
    }
}
