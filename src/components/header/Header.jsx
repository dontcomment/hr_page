import React from "react";
import './header.scss';

export default function Header() {
  return (
    <div>
      <header className="header">
        <img src="./LOGO.svg" alt="logo" />
        <div className="contacts">
          <a href="tel:84742237397">8 (4742) 23-73-97</a>
          <span>Cправочная линия</span>
        </div>
      </header>
    </div>
  )
}
