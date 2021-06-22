import React from 'react';
import CartWidget from './CartWidget/CartWidget'
import './NavBar.css';
import { Link, useParams } from 'react-router-dom'
export default function NavBar() {
    return (
        <>
        <h1>Ecommerce</h1>
            <div className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#"> */}
                    <img className="navbar-brand logo" src="https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bG9nb3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                        {/* </a> */}
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Category
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <Link className="dropdown-item" to="/category/tv">TV</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/category/celphones">CelPhones</Link>
                                </li>
                                <li><hr className="dropdown-divider"/></li>
                                <li>
                                    <Link className="dropdown-item" to="/category/all">All</Link>
                                </li>
                            </ul>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                            <CartWidget/>
                            </a>
                            </li>
                            {/* <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li> */}
                        </ul>
                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </div>
        </>
    )
}
