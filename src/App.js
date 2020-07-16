import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import data from "./data/data.json";

function App() {

  //const products = data.products;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [products, setProducts] = useState(data.products);

  const addProduct = product => {
    setProducts([...products, product]);
  }

  const deleteProduct = id => {
    const filteredProducts = products.filter(product => {
      if(product.id !== id){
        return true;
      }else{
        return false;
      }
    });
    setProducts(filteredProducts);
    console.log(products);
  }

  return (
    <Router>
      <Switch>
      <Route exact path="/">
      <Login email={email} password={password} setEmail={setEmail} setPassword={setPassword}/>
      </Route>
      <Route exact path="/dashboard">
        <Dashboard email={email} products={products} addProduct={addProduct} deleteProduct={deleteProduct}/>
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
