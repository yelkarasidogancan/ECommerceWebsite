using Newtonsoft.Json;

namespace ecommerceApi.Dtos
{
    public class ProductDto
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public long Price { get; set; }
        public int Quantity { get; set; }
        public long Stock { get; set; }

        // Foreign Key olarak CategoryId
        public long CategoryId { get; set; }

        // Category bilgilerini de taşımak istiyorsanız
        [JsonIgnore]
        public CategoryDto? Category { get; set; }
    }
}
