import React from 'react';
import styles from '../styles/component.module.css';

function crypto({name,price,market_cap}) {
    return (
        <div className={styles.cryptoDiv}>
            <span>{name}</span>
            <span>Price {price}</span>
            <span>Market Cap {market_cap}</span>
        </div>
    )
}

export default crypto
