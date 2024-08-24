using AutoMapper;
using ecommerceApi.Data;
using ecommerceApi.Dtos;
using ecommerceApi.Models;
using Microsoft.EntityFrameworkCore;

namespace ecommerceApi.Repositories
{
    public class ProductRepository : GenericRepository<Product>, IProductRepository
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;
        public ProductRepository(AppDbContext context,IMapper mapper) : base(context)
        {
            _context = context; 
            _mapper = mapper;
        }

        public async Task<ProductDto> GetProductsWithCategoryById(long id)
        {
            var _product = await _context.Products.Include(p=>p.Category).FirstOrDefaultAsync(p=>p.Id == id);

            var productDto = _mapper.Map<ProductDto>(_product);
            return productDto;
        }
    }
}
