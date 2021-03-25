const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    }
}
const booksRequested = () => {
    return {
        type: "FETCH_BOOKS_REQUEST"
    }
}
const booksError = (error) => {
    return {
        type: "FETCH_BOOKS_FAILURE",
        payload: error
    }
}

const fetchBooks = (dispatch, bookstoreService) => () => {
    dispatch(booksRequested());
    bookstoreService.getBooks()
        .then(data => dispatch(booksLoaded(data)))
        .catch(err => dispatch(booksError(err)))
}
const addedToCart = (id) => {
    return {
        type: "ADD_TO_CART",
        payload: id
    }
}

const removeItem = (id) => {
    return {
        type: 'REMOVE_ITEM',
        payload: id
    }
}
const deleteItem = (id) => {
    return {
        type: "DELETE_ITEM",
        payload: id
    }
}

export {
    fetchBooks,
    addedToCart,
    removeItem,
    deleteItem
}