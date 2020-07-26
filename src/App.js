import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Products from './Products';
import ProductDetails from './ProductDetails';
import Appbar from './Appbar';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <div>
      
      <Router>

        <Appbar/>
        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route path="/products/:productid" component={ProductDetails} />
          <Route path="*" component={() => <h1>404 Not Found</h1>} />


        </Switch>
      </Router>


    </div>
  );
}


const Home = () => {
  return (
    <div className="App">
      <h1>Welcome to Shoe Store</h1>
    </div>
  )
}


export default App;
