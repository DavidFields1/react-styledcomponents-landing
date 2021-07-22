import './App.css';
import Home from './pages/index'

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>      
        <Switch>
            <Route path="/" component={Home} exact />
            
        </Switch>
    </BrowserRouter>
  );
}

export default App;
