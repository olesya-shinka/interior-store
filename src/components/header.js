import React from "react";

export default function Header() {
  return (
    <header>
      <div>
        <span className="name">Interior Store</span>
        <ul className="menu">
          <li>Profile</li>
          <li>Contacts</li>
          <li>Exit</li>
        </ul>
      </div>
      <div className="background"></div>
    </header>
  );
}
