using Bunny.EF;
using Bunny.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BunnyAPI.Controllers
{
    public class ChatsController : ApiController
    {
        private readonly ChatsDBContext db = new ChatsDBContext();

        /* Add method to change read message */
        public IEnumerable<ChatMessage> Get()
        {
            Conversation conversations = new Conversation();

            var chats = db.Chats.ToList();

            return chats;
        }

        public HttpResponseMessage Add(ChatMessage message)
        {
            db.Chats.Add(message);

            string s = message.SenderEmail;
            string r = message.RecieverEmail;
            
            var usersConv = db.AllConversations.FirstOrDefault(e => (e.RecieverEmail == r && e.SenderEmail == s));

            //Create a new conversation 
            Conversation con = new Conversation();

            if(usersConv != null)
            {
                con.Messages.Add(message);
                con.PreviousMessage = message.Message;
                con.SenderEmail = message.SenderEmail;
                con.RecieverEmail = message.RecieverEmail;
                con.Id = usersConv.Id;
                db.AllConversations.Add(con);
            }
            else
            {

                con.Messages.Add(message);
                con.PreviousMessage = message.Message;
                con.SenderEmail = message.SenderEmail;
                con.RecieverEmail = message.RecieverEmail;

                db.AllConversations.Add(con);
            }

            db.SaveChanges();

            return Request.CreateResponse(HttpStatusCode.Created, message.Id);
        }

        public HttpResponseMessage Get(int id)
        {
            var chatMessage = db.Chats.Find(id);

            if (chatMessage == null)
                return Request.CreateResponse(HttpStatusCode.NotFound, "Chat Message with id " + id + " was not found");

            return Request.CreateResponse(HttpStatusCode.Found, chatMessage);
        }

        public HttpResponseMessage Get(string email)
        {
            var chatMessage = db.Chats.FirstOrDefault(e => e.RecieverEmail == email);

            if (chatMessage == null)
                return Request.CreateResponse(HttpStatusCode.NotFound, "Chat Message with email " + email + " was not found");

            return Request.CreateResponse(HttpStatusCode.Found, chatMessage);
        }
    }
}
