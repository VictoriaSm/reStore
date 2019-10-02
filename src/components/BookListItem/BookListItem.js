import React from 'react';

import './BookListItem.css';

const BookListItem = ({ book, onAddedToCart }) => {
    const { title, author, price, coverImage } = book;
    return (
        <div className="book-list__item">
            <div className="book-list__item-cover">
                <img src={coverImage} alt="cover"/>
            </div>
            <div className="book-list__item-details">
                <a href="/#" className="book-list__item-details__title">{title}</a>
                <div className="book-list__item-details__author">{author}</div>
                <div className="book-list__item-details__price">${price}</div>
                <button 
                    className="btn btn-info"
                    onClick={onAddedToCart} >
                    Add to cart
                </button>
            </div>
        </div>
    );
}

export default BookListItem;