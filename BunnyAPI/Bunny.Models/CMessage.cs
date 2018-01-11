using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bunny.Models
{
    public class CMessage
    {
        public int Id { get; set; }
        public string Message { get; set; }
        public string Time { get; set; }
        public string SenderEmail { get; set; }
        public string RecieverEmail { get; set; }
        public Boolean Read { get; set; }
    }
}
