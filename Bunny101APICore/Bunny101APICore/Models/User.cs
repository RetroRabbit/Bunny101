using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bunny101APICore.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string FullName { get; set; }

        public User(int Id, string Email, string FullName)
        {
            this.Id = Id;
            this.Email = Email;
            this.FullName = FullName;
        }
    }
}
