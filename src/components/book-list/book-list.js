import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchBooks, addedToCart } from '../../actions';
import BookListItem from '../book-list-item';
import Spiner from '../spiner'

import WithBookStoreService from '../HOC'

import './book-list.css'
import ErrorIndicator from '../error-indicator';

class BookListContainer extends Component {
    componentDidMount() {        
       this.props.fetchBooks();
    }

    render() {
        const { books, loading, errorMessage, onAddedToCart} = this.props;
        return (
            <React.Fragment>
            {errorMessage 
            ? <ErrorIndicator/> 
            : loading 
            ? <Spiner/> 
            : <BookList books={books} onAddedToCart={onAddedToCart}/>
            }
            </React.Fragment>
        )
    }
}
const connectStore = ({bookList:{books, loading, errorMessage}}) => {
    return {
        books,
        loading,
        errorMessage
    }
}

const mapDispatchToProps = (dispatch, {bookstoreService}) => {
    return {
        fetchBooks: fetchBooks(dispatch, bookstoreService),
        onAddedToCart: (id) => {dispatch(addedToCart(id))}
    }
}



export default WithBookStoreService()(connect(connectStore, mapDispatchToProps)(BookListContainer))


const BookList = ({books, onAddedToCart}) => {
    return (
        <div className="container">
        <h1 className="booklistTitle">Store of Books</h1>
        <div className="clearfix">
                    <ul className="list-group flex-lg-row booksList">
                    {books ? books.map((book, index) => {
                        return <div className="col-lg-6 item" key={book.id}><li className="list-group-item bg-light list-item"><BookListItem book = { book } onAddedToCart={()=> onAddedToCart(book.id)}/></li></div>
                    }) : null}                    
                    </ul>
        
        </div>
        </div>
        )
}


// const mapDispatchToProps = (dispatch, ownProps) => {
//     const {bookstoreService} = ownProps
//     return {
//         fetchBooks: () => {
//             dispatch(booksRequested());
//             bookstoreService.getBooks()
//                 .then((data) => dispatch(booksLoaded(data)))
//                 .catch(err => dispatch(booksError(err)))
//         }

//     }
// }


// const dispatchFromChildren = {
//     booksLoaded, booksRequested, booksError
//     // return bindActionCreators({
//     //     booksLoaded
//     //     // return {
//     //     // booksLoaded: (newBooks) => { 

//     //     //     // dispatch({
//     //     //     //     type: 'BOOKS_LOADED',
//     //     //     //     payload: newBooks
//     //     //     // })

//     //     //     dispatch(booksLoaded(newBooks))
//     //     // }
        
//     // }, dispatch)
// }

