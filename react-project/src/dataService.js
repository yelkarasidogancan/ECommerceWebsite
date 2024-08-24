const API_URL_PRODUCT = "https://localhost:7244/api/Product"; // API veya JSON dosyasının yolu
const API_URL_CATEGORY = "https://localhost:7244/api/Category"; // API veya JSON dosyasının yolu
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

export async function fetchAllProducts() {
  try {
    const response = await fetch(API_URL_PRODUCT);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

export async function fetchProductById(id) {
  try {
    const response = await fetch(API_URL_PRODUCT + "/" + id);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
}
export async function fetchAllCategories() {
  try {
    const response = await fetch(API_URL_CATEGORY);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

export async function fetchCategoryById(id) {
  try {
    const response = await fetch(API_URL_CATEGORY);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const category = data.find((p) => p.id === parseInt(id, 10));
    if (!category) {
      throw new Error("Product not found");
    }
    return category;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
}

export function confirmCart(order) {
  const stripe = loadStripe(
    "pk_test_51PjoTQApaBz41EuV54yVvohhaAkfRACdtTB1bKuvjakO2oHil5YeD9VYMK5qTNC8UyXmoBRbKEAw1u0p8LgyGXc000FEpZFdS2"
  );
  try {
    const response = axios.post(
      "https://localhost:7244/api/Payment/create-checkout-session",
      order,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    stripe
      .redirectToCheckout({ sessionId: response.sessionId })
      .then(function (result) {
        if (result.error) {
          alert(result.error.message);
        }
      });
  } catch (error) {
    console.error("Error:", error);
  }
}
