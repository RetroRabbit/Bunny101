using Bunny101APICore.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bunny101APICore
{
    public class ApplicationDBContext : DbContext
    {

        public DbSet<ChatMessage> ChatMessages { get; set; }

        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options)
            :base(options)
        {

        }
    }
}
