import React from 'react';
//import './Table.scss'

const Table = () => {
    return <table>
        <thead>
            <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Stock</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Cookie</td>
                <td>$2.0</td>
                <td>25</td>
            </tr>
            <tr>
                <td>Milk 1L</td>
                <td>$1.0</td>
                <td>10</td>
            </tr>
        </tbody>
    </table>
}

export default Table