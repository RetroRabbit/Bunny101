using System;
using System.Collections.Generic;
using System.Linq;
using Bunny101APICore.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Authorization;

namespace Bunny101APICore.Controllers
{
    [EnableCors("AllowSpecificOrigin")]
    [Produces("application/json")]
    [Route("api/Chats")]

    public class ChatsController : Controller
    {
        private List<User> users = new List<User>();

        private ApplicationDBContext db;

        public ChatsController(ApplicationDBContext context)
        {
            db = context;

            users.Add(new User(1,"ts@gmail.com","Thabang"));
            users.Add(new User(2,"nard@gmail.com","Nardus"));
            users.Add(new User(3,"bonga@gmail.com","Bongani"));
            users.Add(new User(4,"sea@gmail.com","seal"));
            users.Add(new User(5,"tsep@gmail.com","Tshepo"));
            users.Add(new User(5,"Dzi@gmail.com","Dzi"));
        }

        [HttpGet]
        public IEnumerable<ChatMessage> Get()
        {
            //Get All Conversations 
            var chats = db.ChatMessages.ToList();

            return chats;
        }

        [Route("GetAllConversations")]
        public List<Conversation> Get(string email)
        {
            List<Conversation> conversations = new List<Conversation>();
            
            List<ChatMessage> AllMessages = db.ChatMessages.ToList();

            foreach(User user in users)
            {
                List<ChatMessage> messages = db.ChatMessages.Where(e => (e.RecieverEmail == users[0].Email && e.SenderEmail == user.Email) || (e.RecieverEmail == user.Email && e.SenderEmail == users[0].Email)).ToList();

                if(messages.Count > 0)
                conversations.Add(new Conversation
                {
                    Id = messages.Last().Id,
                    SenderEmail = messages.Last().SenderEmail,
                    RecieverEmail = messages.Last().RecieverEmail,
                    Messages = messages
                });
            }

            return conversations;
        }

        [HttpGet("{id:int}")]
        public ChatMessage Get(int id)
        {
            var chatMessage = db.ChatMessages.Find(id);

            return chatMessage;
        }

        [AllowAnonymous]
        [HttpPost]
        public int Add([FromBody]ChatMessage message)
        {
            message.Time = DateTime.Now.ToShortTimeString();
            db.ChatMessages.Add(message);

            db.SaveChanges();

            return message.Id;
        }

        [HttpGet("{id}")]
        [Route("GetConversation")]
        public Conversation Get(string receiverEmail, string senderEmail)
        {
            //get conversation between two users 
            List<ChatMessage> messages = new List<ChatMessage>();

            messages = db.ChatMessages.Where(e => (e.RecieverEmail == receiverEmail && e.SenderEmail == senderEmail) || (e.RecieverEmail == senderEmail && e.SenderEmail == receiverEmail)).ToList();

            Conversation conversation = new Conversation();

            if(messages.Count > 0)
            {
                conversation.Id = messages.Last().Id;
                conversation.Messages = messages;
                conversation.SenderEmail = messages.Last().SenderEmail;
                conversation.RecieverEmail = messages.Last().RecieverEmail;
                conversation.PreviousMessage = messages.Last().msg;

                return conversation;
            }
            else
            {
                conversation.SenderEmail = senderEmail;
                conversation.RecieverEmail = receiverEmail;

                return conversation;
            }
        }

        [HttpGet("{id:int}")]
        [Route("GetConversationById")]
        public Conversation GetConversationById(int id)
        {
            //Get last message with the id provided 
            ChatMessage chatMessage = db.ChatMessages.FirstOrDefault(e => e.Id == id);

            if (chatMessage == null)
            {
                return null;
            }

            List<ChatMessage> messages = new List<ChatMessage>();

            messages = db.ChatMessages.Where(e => (e.RecieverEmail == chatMessage.RecieverEmail && e.SenderEmail == chatMessage.SenderEmail)
            || (e.RecieverEmail == chatMessage.SenderEmail && e.SenderEmail == chatMessage.RecieverEmail)).ToList();

            Conversation conversation = new Conversation();

            if (messages.Count > 0)
            {
                conversation.Id = messages.Last().Id;
                conversation.Messages = messages;
                conversation.SenderEmail = messages.Last().SenderEmail;
                conversation.RecieverEmail = messages.Last().RecieverEmail;
                conversation.PreviousMessage = messages.Last().msg;

                return conversation;
            }
            else
            {
                conversation.SenderEmail = chatMessage.SenderEmail;
                conversation.RecieverEmail = chatMessage.RecieverEmail;

                return conversation;
            }
        }

        [HttpPost]
        [Route("MessageRead")]
        public void ChangeMessageToRead(string receiverEmail, string senderEmail)
        {
            db.ChatMessages.First(e => (e.RecieverEmail == receiverEmail && e.SenderEmail == senderEmail) || (e.RecieverEmail == senderEmail && e.SenderEmail == receiverEmail)).Read = true;
            db.SaveChanges();
        }
    }
}