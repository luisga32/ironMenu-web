import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { Route, Switch } from 'react-router';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>

    </div>
  );
}

export default App;
