import React from 'react';
import styles from './index.module.scss';


const ItemDescription = ({id, title, price, description, addToCart}) => {
    return (
        <div className={styles.ItemDescription}>
            <h2>{title}</h2>
            <p>{description}</p>
            <h3>{price}$</h3>
            <button onClick={() => addToCart(id)}>Add to cart</button>
        </div>
    )
}

export default ItemDescription;
