using ecommerceApi.Models;
using ecommerceApi.Repositories;

namespace ecommerceApi.UnitOfWork
{
    public interface IUnitOfWork: IDisposable
    {
        IProductRepository Products { get; }
        IGenericRepository<Category> Categories { get; }
        Task<int> SaveAsync();
    }
}
