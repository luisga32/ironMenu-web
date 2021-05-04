import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router';
import Home from './components/Home/Home';
import Menu from './components/Menus/Menu';
import Product from './components/Product/Product';
import Login from './components/Auth/Login';
import { OrderContextProvider } from './contexts/OrderContext';
import { CourseContextProvider } from './contexts/CourseContext';
import Orders from './components/Order/Orders';

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
          <Route exact path="/user/me/orders" component={Orders} />


        </Switch>

      </div>

      </CourseContextProvider>
 


    </OrderContextProvider>





  );
}

export default App;
