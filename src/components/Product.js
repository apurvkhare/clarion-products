import React from 'react'

import styles from './Product.module.css';

const Product = ({product: {id, name, rate, quality}, deleteProduct}) => {
    return (
        <div className={styles.container}>
            <h2>Product Name: {name}</h2>
            <h2>Product Price: {rate}</h2>
            <h2>Quality: {quality}</h2>
            <button onClick={() => deleteProduct(id)}>Delete Product</button>
            <hr className={styles.line}/>
        </div>
    )
}

export default Product
