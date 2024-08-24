using AutoMapper;
using ecommerceApi.Dtos;
using ecommerceApi.Models;
using ecommerceApi.UnitOfWork;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ecommerceApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public ProductController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetProducts()
        {
            var products = await _unitOfWork.Products.GetAllAsync();
            var productDtos = _mapper.Map<IEnumerable<ProductDto>>(products);
            return Ok(productDtos);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetProduct(int id)
        {
            var product = await _unitOfWork.Products.GetByIdAsync(id);
            if (product == null)
                return NotFound();

            var productDto = _mapper.Map<ProductDto>(product);
            return Ok(productDto);
        }

        [HttpPost]
        public async Task<IActionResult> AddProduct(ProductDto productDto)
        {


            if (productDto.Category == null)
            {
                var category = await _unitOfWork.Categories.GetByIdAsync(productDto.CategoryId);

                if (category == null)
                {
                    return BadRequest("Category not found.");
                }
            }

            var product = _mapper.Map<Product>(productDto);

            await _unitOfWork.Products.AddAsync(product);
            await _unitOfWork.SaveAsync();
            return CreatedAtAction(nameof(GetProduct), new { id = product.Id }, productDto);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProduct(int id, ProductDto productDto)
        {
            if (id != productDto.Id)
                return BadRequest();

            var product = _mapper.Map<Product>(productDto);
            _unitOfWork.Products.Update(product);
            await _unitOfWork.SaveAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            var product = await _unitOfWork.Products.GetByIdAsync(id);
            if (product == null)
                return NotFound();

            _unitOfWork.Products.Delete(product);
            await _unitOfWork.SaveAsync();
            return NoContent();
        }
        [HttpGet("GetProductWithCategory/{id}")]
        public async Task<ProductDto> GetProductWithCategory(int id)
        {
            var product = await _unitOfWork.Products.GetProductsWithCategoryById(id);

            return product;

        }
    }
}
