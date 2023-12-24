import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";

export default function Header() {
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
        {openCart && <div className="cart-shop">cart-shop</div>}
      </div>
      <div className="background"></div>
    </header>
  );
}
