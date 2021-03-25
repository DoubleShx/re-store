const initialState = {
    books: [],
    loading: true,
    errorMessage: null,
    shoppingCart: [],
    total: 140

}

const updateShoppingCart = (shoppingCart, item, idx) => {
        if (idx === -1) {
            return [
                ...shoppingCart,
                item
            ]
        } if (item.count <= 0) {
            return [
                ...shoppingCart.slice(0, idx),
                ...shoppingCart.slice(idx+1)
            ]
        }  else {
            return [
                ...shoppingCart.slice(0, idx),
                item,
                ...shoppingCart.slice(idx+1)
            ]
        }
}
const updateItem = (book, item={}, param) => {
    const {id=book.id, title=book.title, count=0, price=book.price, total=0} = item
    return {
        id,
        title,
        price,
        count: count+param,
        total: total+book.price*param
    }
}



const reducer = (state = initialState, action) => {
    console.log(`type: ${action.type}, payload: ${action.payload}`)
    switch (action.type) {
        case "FETCH_BOOKS_REQUEST":
            return {
                ...state,
                books: [],
                loading: true,
                errorMessage: null
            } 
        case "FETCH_BOOKS_FAILURE":
            return {
                ...state,
                books: [],
                loading: false,
                errorMessage: action.payload
            }
        case "FETCH_BOOKS_SUCCESS" :
            return {
                ...state,
                books: action.payload,
                loading: false,
                errorMessage: null
            };
        case "ADD_TO_CART" :
            let bookId = action.payload
            const book = state.books.find((book) => book.id === bookId)
            const itemIndex = state.shoppingCart.findIndex((el) => el.id === book.id)
            let item = state.shoppingCart[itemIndex]
            let newItem = updateItem(book, item, 1)
               return { 
                   ...state,
                   shoppingCart: updateShoppingCart(state.shoppingCart, newItem, itemIndex)
               };
        case "REMOVE_ITEM" : 
            let newbookId = action.payload;
            let removeitem = state.shoppingCart.find((el) => el.id ===newbookId)
            let removeitemIndex = state.shoppingCart.findIndex((el) => el === removeitem)
            let removenewItem = updateItem(removeitem, removeitem, -1)
            return {
                ...state,
                shoppingCart: updateShoppingCart(state.shoppingCart, removenewItem, removeitemIndex)
                
            };
        case "DELETE_ITEM" :
            let deleteId = action.payload;
            let deleteidx = state.shoppingCart.findIndex(el => el.id ===deleteId);
            return {
                ...state,
                shoppingCart: [
                    ...state.shoppingCart.slice(0, deleteidx),
                    ...state.shoppingCart.slice(deleteidx+1)
                ]
            }

            
        
            
        default: return state
    }    
}

export default reducer;