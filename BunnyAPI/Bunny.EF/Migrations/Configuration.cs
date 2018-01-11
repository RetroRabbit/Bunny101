namespace Bunny.EF.Migrations
{
    using Bunny.Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    public sealed class Configuration : DbMigrationsConfiguration<Bunny.EF.ChatsDBContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
            this.AutomaticMigrationDataLossAllowed = true;
        }

        protected override void Seed(Bunny.EF.ChatsDBContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data.

            //var newChatMessage = new ChatMessage()
            //{
            //    FromEmail = "ts@gmail.com",
            //    Message = "React with webapi hhm",
            //    Time = "03:00",
            //    ToEmail = "retro@gmail.com"
            //};

            //context.Chats.AddOrUpdate(newChatMessage);
        }
    }
}
