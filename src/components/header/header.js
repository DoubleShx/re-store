import React from 'react'
import { NavLink } from 'react-router-dom';
import './header.css'


const Header = ({itemsCount, priceOfItems}) => {
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
                <div className="container">                   
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse pos-f-t" id="navbarNav">
                    <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                        <ul className="navbar-nav">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/books'>Books</NavLink>
                        </li>
                        </ul>

                    </div>
                    <div className="cart">
                        <ul className="list-group list-group-horizontal">                            
                        <i className="car-icon fa fa-shopping-cart cartIcon"></i>           
                        <p><b>{itemsCount}</b> items</p>
                        <p><b>{priceOfItems}</b> $</p>
                        </ul>
                    </div>
                </div>
            </nav>
        
    )
}

export default Header;