import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Header.css';

const Header = ({ items, total }) => {
    let totalCount = 0;

    items.map(item => {
        totalCount += item.count;
        return 0;
    })
    
    return (
        <header className="header row">
            <Link to="/" className="logo text-dark">
                <div className="">ReStore</div>
            </Link>
            <Link to="/cart" className="shopping-cart">
                <i className="cart-icon fa fa-shopping-cart" />
                {totalCount} items (${total})
            </Link>
        </header>
    );
}


const mapStateToProps = ({ shoppingCart: {cartItems, orderTotal} }) => {
    return {
        items: cartItems,
        total: orderTotal
    };
}

export default connect(mapStateToProps)(Header);