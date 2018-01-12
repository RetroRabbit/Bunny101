using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Bunny101APICore.Models
{
    public class ChatMessage
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Message { get; set; }
        [Required]
        public string Time { get; set; }
        [Required]
        public string SenderEmail { get; set; }
        [Required]
        public string RecieverEmail { get; set; }
        [Required]
        public Boolean Read { get; set; }
    }
}
