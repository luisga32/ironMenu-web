import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { Route, Switch } from 'react-router';
import Home from './components/Home/Home';
import Menu from './components/Menus/Menu';
import Product from './components/Product/Product';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/menus/:id" component={Product}/>
        <Route exact path="/menus" component={Menu}/>
    
        
      </Switch>

    </div>
  );
}

export default App;
