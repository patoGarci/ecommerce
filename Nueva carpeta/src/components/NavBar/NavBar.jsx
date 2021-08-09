import React from 'react';
import CartWidget from './CartWidget/CartWidget';
import './NavBar.scss';
import { Link } from 'react-router-dom';
export default function NavBar() {
  return (
    <>
      <h1>Ecommerce</h1>
      <div className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <img
            alt=""
            className="navbar-brand logo"
            src="https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bG9nb3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/category/tv">
                      TV
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/category/celphones">
                      CelPhones
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/category/all">
                      All
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <div className="nav-link active" aria-current="page" href="#">
                  <CartWidget />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
