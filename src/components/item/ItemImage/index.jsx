import React from 'react';
import styles from './index.module.scss';


const ItemImage = ({img}) => {
    return (
        <div className={styles.ItemImage}>
            <img src={img}/>
        </div>
    )
}

export default ItemImage;
