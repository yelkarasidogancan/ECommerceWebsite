import React, { useContext, useEffect, useState } from "react";
import { ExampleContext } from "../ExampleContext";
import style from "../css/container.module.css";
import basket from "../css/basket.module.css";
import { confirmCart } from "../dataService";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import Payment from "./Payment";

function Cart() {
  const [total, setTotal] = useState(0);
  const [cargo, setCargo] = useState(0);

  const { cartItems, setCartItems } = useContext(ExampleContext);

  useEffect(() => {
    updateTotal(cartItems);
  }, []);

  const updateTotal = (items) => {
    if (items.length != 0) {
      setCargo(10);
    } else {
      setCargo(0);
    }
    const newTotal = items.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    setTotal(newTotal);
  };

  const dataToSend = cartItems.map(
    ({ name, price, quantity, description }) => ({
      name,
      price,
      quantity,
      description,
    })
  );

  const payment = () => {
    confirmCart(dataToSend);
  };

  const handleIncrease = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity += 1;
    updateTotal(updatedCartItems);
  };

  const handleDecrease = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity -= 1;
      updateTotal(updatedCartItems);
    }
  };

  const handleRemove = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems); // Sepetten ürünü kaldır
    updateTotal(updatedCartItems);
  };

  return (
    <div className={`${style.py} ${style.container} ${basket.container}`}>
      {cartItems.length === 0 ? (
        <div className={`${basket.center} ${basket.leftSide}`}>
          Sepetinizde ürün yok.
        </div>
      ) : (
        <div className={basket.leftSide}>
          {cartItems.map((item, index) => (
            <div key={index} className={basket.item}>
              <input className={basket.checkbox} type="checkbox" checked />
              <div className={basket.image}>
                <img src={item.image} alt="" />
              </div>
              <div className={basket.detail}>
                <p className={basket.name}>{item.name}</p>
                <p className={basket.description}>{item.description}</p>
              </div>

              <div className={basket.number}>
                <div
                  className={basket.decrease}
                  onClick={() => handleDecrease(index)}
                >
                  -
                </div>
                <input
                  className={basket.nInput}
                  type="number"
                  value={item.quantity}
                />
                <div
                  className={basket.increase}
                  onClick={() => handleIncrease(index)}
                >
                  +
                </div>
              </div>
              <div className={basket.price}>{item.price} $</div>
              <div
                className={basket.remove}
                onClick={() => handleRemove(index)}
              >
                <IoIosRemoveCircleOutline size={25} />
              </div>
            </div>
          ))}
        </div>
      )}
      <div className={basket.rightSide}>
        <div className={basket.calculateContainer}>
          <h3>Order Summary</h3>
          <ul>
            <li>
              <span>Total of product</span>
              <strong>{total} $</strong>
            </li>
            <li>
              <span>Shipping fee</span>
              <strong>{cargo} $</strong>
            </li>
            <div className={basket.hr}></div>
            <div className={basket.totalText}>
              <span>Total</span> <p>{total + cargo} $</p>
            </div>
          </ul>
        </div>
        {cartItems.length != 0 ? (
          <Payment cartItems={cartItems} />
        ) : (
          <div className={basket.buttonDis}>Confirm Cart</div>
        )}
      </div>
    </div>
  );
}

export default Cart;
