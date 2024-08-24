using AutoMapper;
using ecommerceApi.Dtos;
using ecommerceApi.Models;
using ecommerceApi.UnitOfWork;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ecommerceApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public CategoryController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetProducts()
        {
            var categories = await _unitOfWork.Categories.GetAllAsync();
            var categoryDtos = _mapper.Map<IEnumerable<CategoryDto>>(categories);
            return Ok(categoryDtos);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetProduct(int id)
        {
            var category = await _unitOfWork.Categories.GetByIdAsync(id);
            if (category == null)
                return NotFound();

            var productDto = _mapper.Map<CategoryDto>(category);
            return Ok(productDto);
        }

        [HttpPost]
        public async Task<IActionResult> AddProduct(CategoryDto categorytDto)
        {
            var category = _mapper.Map<Category>(categorytDto);
            await _unitOfWork.Categories.AddAsync(category);
            await _unitOfWork.SaveAsync();
            return CreatedAtAction(nameof(GetProduct), new { id = category.Id }, categorytDto);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProduct(int id, CategoryDto categorytDto)
        {
            if (id != categorytDto.Id)
                return BadRequest();

            var category = _mapper.Map<Category>(categorytDto);
            _unitOfWork.Categories.Update(category);
            await _unitOfWork.SaveAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            var category = await _unitOfWork.Categories.GetByIdAsync(id);
            if (category == null)
                return NotFound();

            _unitOfWork.Categories.Delete(category);
            await _unitOfWork.SaveAsync();
            return NoContent();
        }
    }
}
