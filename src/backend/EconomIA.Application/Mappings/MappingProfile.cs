using AutoMapper;
using EconomIA.Application.DTOs;
using EconomIA.Domain.Entities;

namespace EconomIA.Application.Mappings
{
    public class MappingProfile : Profile
    {
        public MappingProfile() 
        {
            CreateMap<User, RegisterUserDto>()
                .ReverseMap()
                .ConstructUsing(dto => new User(dto.Name, dto.Email, dto.Password));
        }
    }
}
