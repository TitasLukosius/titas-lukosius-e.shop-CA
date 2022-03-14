import React from 'react';
import styles from './index.module.scss';
import BasketItem from '../BasketItem';
import { v4 as uuidv4 } from 'uuid';


const BasketTable = ({items}) => {
   
    let total = 0;

    for(let i=0; i<items.length; i++) {
        if (items[i].purchaseAmount > 1) {
            total += items[i].price * items[i].purchaseAmount
        } else {
        total += items[i].price;
        }
    }

    const itemsList = items.map(item => {
        return (
            <BasketItem key={uuidv4()} {...item}/>
        )
    })


    return (
        <div className={styles.tableCon}>
            <h2>Your Basket!</h2>
            <table className={styles.table}>
                <tr>
                    <th></th>
                    <th>Item name</th>
                    <th>Price</th>
                    <th>Amount</th>
                    <th>Remove</th>
                </tr>
                {itemsList}
            </table>
            <p>Total Price: {total}</p>
            <button>checkout</button>
        </div>
    )
}

export default BasketTable;
