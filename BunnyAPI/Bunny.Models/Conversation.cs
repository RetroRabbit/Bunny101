using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bunny.Models
{
    public class Conversation
    {
        public int Id { get; set; }
        public string SenderEmail { get; set; }
        public string RecieverEmail { get; set; }
        public string PreviousMessage { get; set; }
        public List<ChatMessage> Messages {get;set;}


        public Conversation()
        {
            Messages = new List<ChatMessage>();
        }
    }
}
