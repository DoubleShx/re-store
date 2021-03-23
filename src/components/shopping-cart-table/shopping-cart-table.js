import React from 'react'
import './shopping-cart-table.css'

const ShoppingCartTable = () => {
    return (
        <div className="container">
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Item</th>
                    <th scope="col">Count</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    </tr>
                    
                </tbody>
            </table>
            <p className="d-flex justify-content-end">total price: <b>200$</b></p>
        </div>

    )
}

export default ShoppingCartTable;
