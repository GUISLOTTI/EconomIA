using System.ComponentModel.DataAnnotations;


namespace EconomIA.Application.DTOs
{
    public class RegisterUserDto
    {
        [Required(ErrorMessage = "O campo Nome é obrigatório.")]
        [MinLength(4, ErrorMessage = "O campo Nome precisa ter no mínimo 4 caracteres.")]
        [MaxLength(100, ErrorMessage = "O campo Nome não pode exceder o limite de 100 caracteres")]
        [DataType(DataType.Text)]
        [Display(Name = "Nome")]
        public string Name { get; set; }

        [Required(ErrorMessage = "O campo Email é obrigatório.")]
        [MinLength(10, ErrorMessage = "O campo Email tem quantidade miníma necessária.")]
        [MaxLength(150, ErrorMessage = "O campo Email tem quantidade máxima necessária.")]
        [EmailAddress(ErrorMessage = "O formato do email é inválido.")]
        [DataType(DataType.EmailAddress)]
        [Display(Name = "Email")]
        public string Email { get; set; }

        [Required(ErrorMessage = "O campo Senha é obrigatório.")]
        [StringLength(100, ErrorMessage = "A {0} deve ter no mínimo {2} e no máximo {1} caracteres.", MinimumLength = 6)]
        [DataType(DataType.Password)]
        [Display(Name = "Senha")]
        public string Password { get; set; }

        [Required(ErrorMessage = "O campo Confirmar Senha é obrigatório.")]
        [DataType(DataType.Password)]
        [Compare("Password", ErrorMessage = "A senha e a confirmação não coincidem.")]
        [Display(Name = "Confirmar Senha")]
        public string ConfirmPassword { get; set; }

        [DataType(DataType.DateTime)]
        public DateTime CreationDate { get; set; }

        public bool Active { get; set; }

        
        public RegisterUserDto(string name, string email, string password, string confirmpassword)
        {
            Name = name;
            Email = email;
            Password = password;
            ConfirmPassword = confirmpassword;
            CreationDate = DateTime.Now;
            Active = true;
        }
    }
}
