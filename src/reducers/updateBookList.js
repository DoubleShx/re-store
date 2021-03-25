const updateBookList = (state, action) => {
    if (state === undefined) {
        return {         
                books: [],
                loading: true,
                errorMessage: null}        
        }
    switch (action.type) {
    case "FETCH_BOOKS_REQUEST":
        return {
            books: [],
            loading: true,
            errorMessage: null
        } 
    case "FETCH_BOOKS_FAILURE":
        return {
            books: [],
            loading: false,
            errorMessage: action.payload
        }
    case "FETCH_BOOKS_SUCCESS" :
        return {
            books: action.payload,
            loading: false,
            errorMessage: null
        };
    default: 
        return state.bookList;
    }
}
export default updateBookList;