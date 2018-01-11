using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bunny.Models
{
    public class ChatMessage
    {
        public int Id { get; set; }
        public string Message { get; set; }
        public string Time { get; set; }
        public string SenderEmail { get; set; }
        public string RecieverEmail { get; set; }
        public Boolean Read { get; set; }
    }
}
