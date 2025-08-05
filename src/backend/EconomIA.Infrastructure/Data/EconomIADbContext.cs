using EconomIA.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace EconomIA.Infrastructure.Data
{
    public class EconomIADbContext : DbContext
    {
        public EconomIADbContext(DbContextOptions<EconomIADbContext> options) : base(options)
        {
        }
        public DbSet<User> Users { get; set; }
    }
}