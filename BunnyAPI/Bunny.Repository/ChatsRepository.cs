using Bunny.EF;
using Bunny.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bunny.Repository
{
   public class ChatsRepository : IRepository
    {
        ChatsDBContext dbContext = new ChatsDBContext();

        public IEnumerable<ChatMessage> GetAll()
        {
            IEnumerable<ChatMessage> chatsMessages = dbContext.Chats.ToArray();

            return chatsMessages;
        }

        public ChatMessage Get(int id)
        {
            return dbContext.Chats.Find(id);
     }

        public int Delete(ChatMessage item)
        {
            int i = dbContext.Chats.Remove(item).Id;
            dbContext.SaveChanges();

            return i;
        }

        public IEnumerable<ChatMessage> FindChatsByEmail(string email)
        {
            return dbContext.Chats.Where(e => e.FromEmail == email).ToArray();
        }

        public int Add(ChatMessage item)
        {
            dbContext.Chats.Add(item);

            return item.Id;
        }

        public void commit()
        {
            dbContext.SaveChanges();
        }
    }
}
