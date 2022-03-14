import React from 'react';
import styles from './index.module.scss';
import ItemCard from '../../item-card';

const ItemGrid = ({items}) => {

    let style = {
        fontSize: '100px',
        color: '#013220',

    }
    if(items.length > 0) {
        style = {
            display: 'none'
        }
    }

    const itemCards = items.map(item => <ItemCard key={item.id} {...item} />)

    return (
        <div className={styles.itemGrid}>
            <p style={style}>Prekiu Nerasta!</p>
            {itemCards}
        </div>
    )
}

export default ItemGrid;