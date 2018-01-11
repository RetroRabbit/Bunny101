using Bunny.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bunny.EF
{
    public class ChatsDBContext : DbContext
    {
        public DbSet<ChatMessage> Chats { get; set; }

        public DbSet<Conversation> AllConversations { get; set; }
    }
}
