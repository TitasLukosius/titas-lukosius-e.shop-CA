import React from 'react';
import styles from './index.module.scss';

const TitleImage = () => {
    return (
        <div className={styles.TitleImage}>
            <div className={styles.img}>
                <img src="https://photoresources.wtatennis.com/photo-resources/2019/08/15/dbb59626-9254-4426-915e-57397b6d6635/tennis-origins-e1444901660593.jpg?width=1200&height=630"></img>
            </div>
            <h1>Hit the Ball!</h1>
        </div>
    )
}

export default TitleImage;
