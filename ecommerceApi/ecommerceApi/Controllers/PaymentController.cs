using ecommerceApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Stripe;
using Stripe.Checkout;

namespace ecommerceApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentController : ControllerBase
    {
        public PaymentController()
        {
            StripeConfiguration.ApiKey = "sk_test_51PjoTQApaBz41EuVt4EPYs2t9Yinj0s7FQCZRoXj692QhmwVQPN9CZgwJ9SRO95pmpWdcGEcaAbFBgGyMTFACI9000U9WZpNc4";
        }

        [HttpPost("create-checkout-session")]
        public ActionResult CreateCheckoutSession([FromBody] List<ProductRequest> products)
        {
            var domain = "http://localhost:5173/";

            var lineItems = new List<SessionLineItemOptions>();
            foreach (var product in products)
            {
                lineItems.Add(new SessionLineItemOptions
                {
                    PriceData = new SessionLineItemPriceDataOptions
                    {
                        UnitAmount = product.Price * 100, // Price in cents
                        Currency = "usd",
                        ProductData = new SessionLineItemPriceDataProductDataOptions
                        {
                            Name = product.Name,
                            Description = product.Description,
                            Images = product.Images
                        },
                    },
                    Quantity = product.Quantity,
                });
            }

            var options = new SessionCreateOptions
            {
                PaymentMethodTypes = new List<string>
            {
                "card",
            },
                LineItems = lineItems,
                Mode = "payment",
                SuccessUrl = $"{domain}pages/success.html?session_id={{CHECKOUT_SESSION_ID}}",
                CancelUrl = $"{domain}pages/cancel.html",
                ShippingAddressCollection = new SessionShippingAddressCollectionOptions
                {
                    AllowedCountries = new List<string> { "US", "CA", "TR" } // Desteklenen ülkeler
                },
                BillingAddressCollection = "required"
            };

            var service = new SessionService();

            Session session = service.Create(options);

            return Ok(new { sessionId = session.Id });
        }
    }
}
