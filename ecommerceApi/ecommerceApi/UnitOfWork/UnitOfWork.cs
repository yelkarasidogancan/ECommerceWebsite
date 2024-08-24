using AutoMapper;
using ecommerceApi.Data;
using ecommerceApi.Models;
using ecommerceApi.Repositories;

namespace ecommerceApi.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly AppDbContext _context;
        private IProductRepository _productRepository;
        private IGenericRepository<Category> _categories;
        private IMapper _mapper;

        public UnitOfWork(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public IProductRepository Products
        {
            get
            {
                return _productRepository ??= new ProductRepository(_context,_mapper);
            }
        }

        public IGenericRepository<Category> Categories
        {
            get { return _categories ??= new GenericRepository<Category>(_context); }
        }

        public async Task<int> SaveAsync()
        {
            return await _context.SaveChangesAsync();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
