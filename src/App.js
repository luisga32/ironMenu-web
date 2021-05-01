import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { Route, Switch } from 'react-router';
import Home from './components/Home/Home';
import Menu from './components/Menus/Menu';
import Product from './components/Product/Product';
import Login from './components/Auth/Login';
import { OrderContextProvider } from './contexts/OrderContext';
import { CourseContextProvider } from './contexts/CourseContext';

function App() {
  return (
    <OrderContextProvider>
      <CourseContextProvider>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/menus/:id" component={Product} />
          <Route exact path="/menus" component={Menu} />
          <Route exact path="/login" component={Login} />


        </Switch>

      </div>

      </CourseContextProvider>
 


    </OrderContextProvider>





  );
}

export default App;
