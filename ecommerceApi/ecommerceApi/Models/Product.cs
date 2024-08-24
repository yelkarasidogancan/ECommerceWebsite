namespace ecommerceApi.Models
{
    public class Product
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public long Price{ get; set; }
        public long Quantity { get; set; }
        public long Stock {  get; set; }

        public long CategoryId { get; set; }

        // Navigation Property
        public Category Category { get; set; }

    }
}
