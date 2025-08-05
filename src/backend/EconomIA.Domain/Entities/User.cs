namespace EconomIA.Domain.Entities
{
    public class User : BaseEntity
    {
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public bool IsEmailConfirmed { get; set; }
        public string Password { get; set; } = string.Empty;
        public DateTime LastAccess {  get; set; }
        public bool Active { get; set; }
        public ICollection<Transaction> Transactions { get; set; }
        private User() { }
        public User(string name, string email, string password)
        {
            Name = name;
            Email = email;
            Password = password;
            LastAccess = DateTime.UtcNow;
            Active = true;
            IsEmailConfirmed = false;
        }
    }
}
