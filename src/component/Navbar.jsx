import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [navbar, setNavbar] = useState(false);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const changeBackground = () => {
    if (window.scrollY >= 300) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <nav>
      <div className={navbar ? "navbar active" : "navbar"}>
        <div className="logo">Smartz</div>
        {(toggleMenu || screenWidth > 844) && (
          <ul className="list">
            <li className="items">
              <a href="#">Home</a>
            </li>
            <li className="items">
              <a href="#">Service</a>
            </li>
            <li className="items">
              <a href="#">About</a>
            </li>
            <li className="items">
              <a href="#">Contact</a>
            </li>
            <div className="btn-container">
              <button className="nav-list-btn" type="button">
                sign in
              </button>
            </div>
          </ul>
        )}
        <div className="btn-toggle">
          <div onClick={toggleNav} className="btn-nav">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
