using AutoMapper;
using ecommerceApi.Dtos;
using ecommerceApi.Models;

namespace ecommerceApi.MappingProfiles;

public class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<Product, ProductDto>().ReverseMap();

        CreateMap<Category, CategoryDto>().ReverseMap();
    }
}
