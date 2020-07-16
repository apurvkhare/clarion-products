import React, {useState} from "react";
import Product from "./Product";
import Popup from "reactjs-popup";

import styles from './Dashboard.module.css';

const Dashboard = ({ email, products, addProduct, deleteProduct }) => {

    const [name, setName] = useState("");
    const [rate, setRate] = useState(0);
    const [quality, setQuality] = useState(1);

  const getUsername = () => {
    const user = email.split("@");
    return user[0];
  };

  const onSubmit = e =>{
      e.preventDefault();
      const newProduct = {
          id: products[products.length-1].id + 1,
          name,
          rate,
          quality
      }
      addProduct(newProduct);
      alert("New Product Added");
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Dashboard, Welcome {getUsername()}</h1>
      <ul>
        {products.map((product) => (
          <Product key={product.id} product={product}  deleteProduct={deleteProduct}/>
        ))}
      </ul>
      <Popup trigger={<button className={styles.addbtn}>Add Product</button>} position='right center'>
        {close => <form onSubmit={onSubmit}>
            Product Name <input type="text" name="name" id="" value={name} onChange={e => setName(e.target.value)}/>
            Product Rate <input type="text" name="rate" id="" value={rate} onChange={e => setRate(e.target.value)}/>
            Product Quality <select name="quality" id="" value={quality} onChange={e => setQuality(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <button type="submit">Add</button>
            <button onClick={close}>Cancel</button>
        </form>}
      </Popup>
    </div>
  );
};

export default Dashboard;
