import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe(
  "pk_test_51PjoTQApaBz41EuV54yVvohhaAkfRACdtTB1bKuvjakO2oHil5YeD9VYMK5qTNC8UyXmoBRbKEAw1u0p8LgyGXc000FEpZFdS2"
);

const Payment = ({ cartItems }) => {
  const dataToSend = cartItems.map(
    ({ name, price, quantity, description, image }) => ({
      name,
      price,
      quantity,
      description,
      images: [image],
    })
  );

  const handlePayment = async () => {
    try {
      const response = await axios.post(
        "https://localhost:7244/api/Payment/create-checkout-session",
        dataToSend,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { sessionId } = response.data;

      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        sessionId,
      });

      if (error) {
        console.error("Stripe error:", error.message);
        alert(error.message);
      }
    } catch (error) {
      console.error("Axios error:", error);
    }
  };

  return <button onClick={handlePayment}>Complete Payment</button>;
};

export default Payment;
