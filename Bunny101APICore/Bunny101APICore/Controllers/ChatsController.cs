using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Bunny101APICore.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Bunny101APICore.Controllers
{
    [Produces("application/json")]
    [Route("api/Chats")]
    public class ChatsController : Controller
    {
        private ApplicationDBContext db;

        /* Add method to change read message */
        public ChatsController(ApplicationDBContext context)
        {
            //By dependency injection rules we get this context in the startup file 
            db = context;
        }

        [HttpGet]
        public IEnumerable<ChatMessage> Get()
        {
            //Get All Conversations 
            var chats = db.ChatMessages.ToList();

            return chats;
        }

        //Currently working on this method
        [Route("GetAllConversations")]
        public IEnumerable<ChatMessage> Get(string email)
        {
            //Group Messages to conversations
            var chats = db.ChatMessages.ToList();

            return chats;
        }

        [HttpGet("{id:int}")]
        public ChatMessage Get(int id)
        {
            var chatMessage = db.ChatMessages.Find(id);

            return chatMessage;
        }

        [HttpPost]
        public int Add([FromBody]ChatMessage message)
        {
            db.ChatMessages.Add(message);

            db.SaveChanges();

            return message.Id;
        }

        [HttpGet("{id}")]
        [Route("GetConversation")]
        public List<ChatMessage> Get(string receiverEmail, string senderEmail)
        {
            //get conversation between two users 
            List<ChatMessage> conversation = new List<ChatMessage>();

            conversation = db.ChatMessages.Where(e => (e.RecieverEmail == receiverEmail && e.SenderEmail == senderEmail) || (e.RecieverEmail == senderEmail && e.SenderEmail == receiverEmail)).ToList();

            return conversation;
        }
    }
}
 