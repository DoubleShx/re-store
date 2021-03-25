import React from 'react'

import {connect} from 'react-redux'
import {addedToCart, removeItem, deleteItem} from '../../actions/index'

import './shopping-cart-table.css'

const ShoppingCartTable = ({items, total, onIncrease, onDecrease, onDelete}) => {
    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Item</th>
                    <th scope="col">Count</th>
                    <th scope="col">Total Price</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                {   items 
                    ? items.map((item, idx) => {
                        const id = item.id;
                        return (
                        <tbody key={id}>
                        <tr>
                        <th scope="row">{id}</th>
                        <td>{item.title}</td>
                        <td>{item.count}</td>
                        <td>{item.total}</td>
                        <td>
                            <button className="btn btn-outline-success btn-sm " onClick={() => onIncrease(id)}><i className="fa fa-plus-circle"/></button>
                            <button className="btn btn-outline-warning btn-sm" onClick={() => onDecrease(id)}><i className="fa fa-minus-circle"/></button>                            
                            <button className="btn btn-outline-danger btn-sm" onClick={() => onDelete(id)}><i className="fa fa-trash-o"/></button>
                        </td>
                        </tr>                    
                    </tbody>) })
                    : null }
                
            </table>
            <p className="d-flex justify-content-end">total price: <b>{total}$</b></p>
        </div>

    )
}
const propsFromStore = ({shoppingCart, total}) => {
    return {
        items: shoppingCart,
        total: total
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onIncrease: (id) => { dispatch(addedToCart(id))},
        onDecrease: (id) => { dispatch(removeItem(id))},
        onDelete: (id) => { dispatch(deleteItem(id))}
    }
}

export default connect(propsFromStore, mapDispatchToProps)(ShoppingCartTable);
