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


const updateShopping = (state, action) => {
if (state === undefined) {
    return {           
            shoppingCart: [],
            total: 0
    }
}
switch (action.type) {
case "ADD_TO_CART" :
    let bookId = action.payload
    const book = state.bookList.books.find((book) => book.id === bookId)
    const itemIndex = state.shopping.shoppingCart.findIndex((el) => el.id === book.id)
    let item = state.shopping.shoppingCart[itemIndex]
    let newItem = updateItem(book, item, 1)
       return { 
           shoppingCart: updateShoppingCart(state.shopping.shoppingCart, newItem, itemIndex)
       };
case "REMOVE_ITEM" : 
    let newbookId = action.payload;
    let removeitem = state.shopping.shoppingCart.find((el) => el.id ===newbookId)
    let removeitemIndex = state.shopping.shoppingCart.findIndex((el) => el === removeitem)
    let removenewItem = updateItem(removeitem, removeitem, -1)
    return {
        shoppingCart: updateShoppingCart(state.shopping.shoppingCart, removenewItem, removeitemIndex)
        
    };
case "DELETE_ITEM" :
    let deleteId = action.payload;
    let deleteidx = state.shopping.shoppingCart.findIndex(el => el.id ===deleteId);
    return {
        shoppingCart: [
            ...state.shopping.shoppingCart.slice(0, deleteidx),
            ...state.shopping.shoppingCart.slice(deleteidx+1)
        ]
    }
default: 
    return state.shopping;    
} 
}

export default updateShopping;