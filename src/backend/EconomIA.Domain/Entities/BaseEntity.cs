namespace EconomIA.Domain.Entities
{
    public class BaseEntity
    {
        public Guid Id { get; private set; } = Guid.NewGuid();
        public DateTime CreationDate { get; private set; }
        public DateTime? UpdatedAt { get; set; }
    }
}
