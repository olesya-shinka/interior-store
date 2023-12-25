import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Orders } from "./orders";

const showGoods = (props) => {
  return (
    <div>
      {props.orders.map((el) => (
        <Orders key={el.id} item={el} />
      ))}
    </div>
  );
};

const showEmptyCart = () => {
  return (
    <div className="empty-cart">
      <h3>Cart is empty</h3>
    </div>
  );
};

export default function Header(props) {
  let [openCart, setOpenCart] = useState(false);
  return (
    <header>
      <div>
        <span className="name">Interior Store</span>
        <ul className="menu">
          <li>Profile</li>
          <li>Contacts</li>
          <li>Exit</li>
        </ul>
        <FaCartShopping
          onClick={() => setOpenCart((openCart = !openCart))}
          className={`icon-cart ${openCart && "active"}`}
        />
        {openCart && (
          <div className="cart-shop">
            {props.orders.length > 0 ? showGoods(props) : showEmptyCart()}
          </div>
        )}
      </div>
      <div className="background"></div>
    </header>
  );
}
