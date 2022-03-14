import React from 'react';
import styles from './index.module.scss';
import {
    Link
} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const FooterList = ({left, middle, right}) => {

    const leftSide = left.map((link) => {
        return <Link key={uuidv4()} className={styles.LinkL}to={link.href}>{link.title}</Link>
    })

    const middleSide = middle.map((link) => {
        return <p key={uuidv4()} className={styles.LinkM}to={link.href}>{link.description}</p>
    })

    const rightSide = right.map((link) => {
        return <li key={uuidv4()} className={styles.LinkR}to={link.href}>{link.title}</li>
    })

    return (
        <div className={styles.FooterList}>
            <div className={styles.Left}>
                <h3>Visit page</h3>
                {leftSide}
            </div>
            <div className={styles.Middle}>
                <h3>Description</h3>
                {middleSide}
            </div>    
            <div className={styles.Right}>
                <h3>Contacts</h3>
                {rightSide}
            </div>
        </div>
    )
}

export default FooterList;
