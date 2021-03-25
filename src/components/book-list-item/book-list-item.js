import React from 'react'
import './book-list-item.css'

const BookListItem = ({book, onAddedToCart}) => {
    const {title, author, price, coverImage} = book
    return (
        <div className="container list-item">
            <div className="row">
            <div className="col-md-4">
                <img alt={`book: ${title}`} src={coverImage} className="img-fluid"></img>
            </div>
            <div className="col-md-8">
                <h1 className="titleItem">{title}</h1>
                <h3 className="authorItem">{`Author: ${author}`}</h3>
                <h3 className="alert alert-info priceItem" onClick={onAddedToCart}>{`price: ${price}$`}</h3>
            </div>    
            </div>    
        </div>
    )
}
export default BookListItem;