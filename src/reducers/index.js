import updateBookList from './updateBookList'
import updateShopping from './updateShopping'


const reducer = (state, action) => {
            return {
                bookList: updateBookList(state, action),
                shopping: updateShopping(state, action)
    }    
}
    
export default reducer;