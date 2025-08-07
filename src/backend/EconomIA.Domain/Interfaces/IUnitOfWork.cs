using EconomIA.Domain.Entities;

namespace EconomIA.Domain.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IRepository<User> Users { get; }
        IRepository<Transaction> Transactions { get; }

        Task<int> CommitAsync();
    }
}