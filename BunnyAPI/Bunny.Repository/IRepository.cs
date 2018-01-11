using Bunny.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bunny.Repository
{
    public interface IRepository
    {
        IEnumerable<ChatMessage> GetAll();
        ChatMessage Get(int id);
        int Delete(ChatMessage item);
        IEnumerable<ChatMessage> FindChatsByEmail(string email);
        int Add(ChatMessage item);
        void commit();
    }
}