import React from 'react';
import styles from './index.module.scss';
import {
    Link
} from 'react-router-dom';


const IntroImage = () => {
    return (
        <div className={styles.IntroImage}>
            <div className={styles.ImageContainer}>
                <img src='https://tennishead.net/wp-content/uploads/2019/04/Babolat-Pure-Drive-VS-2019.jpg'></img>
                <img src='https://www.tennispro.eu/media/catalog/product/cache/5/thumbnail/1200x/9df78eab33525d08d6e5fb8d27136e95/2/3/234440_5_3.jpg'></img>
                <img src='https://img.tennis-warehouse.com/watermark/rs.php?path=PDJR26-1.jpg&nw=296'></img>
                <img src='https://tennishead.net/wp-content/uploads/2019/04/Babolat-Pure-Drive-VS-2019.jpg'></img>
                <img src='https://www.tennispro.eu/media/catalog/product/cache/5/thumbnail/1200x/9df78eab33525d08d6e5fb8d27136e95/2/3/234440_5_3.jpg'></img>
                <img src='https://img.tennis-warehouse.com/watermark/rs.php?path=PDJR26-1.jpg&nw=296'></img>
                <img src='https://tennishead.net/wp-content/uploads/2019/04/Babolat-Pure-Drive-VS-2019.jpg'></img>
                <img src='https://www.tennispro.eu/media/catalog/product/cache/5/thumbnail/1200x/9df78eab33525d08d6e5fb8d27136e95/2/3/234440_5_3.jpg'></img>
                <img src='https://img.tennis-warehouse.com/watermark/rs.php?path=PDJR26-1.jpg&nw=296'></img>
                <button><Link to={`/catalog`}>Start Shoping!</Link></button>
            </div>
        </div>
    )
}

export default IntroImage;
