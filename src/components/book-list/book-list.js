import React, { Component } from 'react'
import { connect } from 'react-redux';
import { booksLoaded } from '../../actions';
import BookListItem from '../book-list-item';

import WithBookStoreService from '../HOC'

import './book-list.css'

class BookList extends Component {

    componentDidMount() {
        const {bookstoreService} = this.props;
        const data = bookstoreService.getBooks();

        this.props.booksLoaded(data)
    }

    render() {
        const { books } = this.props;
        return (
            <div className="container">
                <h1>Book list Component</h1>
                <div className="clearfix">
                <ul className="list-group flex-lg-row">
                    {books ? books.map((book, index) => {
                        return <div className="col-lg-6 item" key={book.id}><li className="list-group-item bg-light list-item"><BookListItem book = { book }/></li></div>
                    }) : null}                    
                </ul>
                </div>
            </div>
        )
    }
}
const connectStore = (state) => {
    return {
        books: state.books
    }
}
const dispatchFromChildren = {
    booksLoaded
    // return bindActionCreators({
    //     booksLoaded
    //     // return {
    //     // booksLoaded: (newBooks) => { 

    //     //     // dispatch({
    //     //     //     type: 'BOOKS_LOADED',
    //     //     //     payload: newBooks
    //     //     // })

    //     //     dispatch(booksLoaded(newBooks))
    //     // }
        
    // }, dispatch)
}

export default WithBookStoreService()(connect(connectStore, dispatchFromChildren)(BookList))