namespace EconomIA.Domain.Entities
{
    public class Transaction : BaseEntity
    {
        public Guid UserId { get; set; }
        public User User { get; set; }
        public Guid CategoryId { get; set; }
        public Category Category { get; set; }
        public decimal Amount { get; set; }
        public string Description { get; set; }
        public DateTime TransactionDate { get; set; }
        public TransactionType Type { get; set; }
    }
}
