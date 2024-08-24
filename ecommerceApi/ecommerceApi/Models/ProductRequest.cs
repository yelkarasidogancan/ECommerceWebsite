namespace ecommerceApi.Models
{
    public class ProductRequest
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public long Price { get; set; } // Price in cents
        public int Quantity { get; set; }
        public List<string> Images { get; set; }
    }
}
