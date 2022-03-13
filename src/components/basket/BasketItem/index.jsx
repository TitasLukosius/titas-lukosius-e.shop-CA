import React from 'react';
import styles from './index.module.scss';

const BasketItem = ({title, price, id, purchaseAmount, removeFromCart }) => {
    return (
        <tr id={id}>
            <td>{id}.</td>
            <td>{title}</td>
            <td>{price}</td>
            <td>{purchaseAmount}</td>
            <td id={id} className={styles.remove} onClick={()=>console.log(id)}>x</td>
        </tr>
    )
}

export default BasketItem;
