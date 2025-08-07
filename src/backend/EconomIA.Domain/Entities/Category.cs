using EconomIA.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EconomIA.Domain.Entities
{
    public class Category : BaseEntity
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public string Name { get; set; } = string.Empty;
        public Color Color { get; set; } = Color.White;
        public string Icon { get; set; } = string.Empty;
        public TransactionType Type { get; set; }


    }
}
