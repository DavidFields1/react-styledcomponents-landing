import './App.css';
import Home from './pages/index'
import Signin from  './pages/signin';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>      
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/signin" component={Signin} exact />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
