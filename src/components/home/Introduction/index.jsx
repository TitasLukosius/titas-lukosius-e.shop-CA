import React from 'react';
import styles from './index.module.scss';
import IntroText from '../IntroText';
import IntroImage from '../IntroImage';

const Introduction = () => {
    return (
        <div className={styles.Introduction}>
            <IntroText />
            <IntroImage />
        </div>
    )
}

export default Introduction;
