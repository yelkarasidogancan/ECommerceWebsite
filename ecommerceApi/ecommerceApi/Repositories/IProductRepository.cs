using ecommerceApi.Dtos;
using ecommerceApi.Models;

namespace ecommerceApi.Repositories
{
    public interface IProductRepository:IGenericRepository<Product>
    {
        Task<ProductDto> GetProductsWithCategoryById(long id);
    }
}
