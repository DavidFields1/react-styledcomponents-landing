import './App.css';
import Home from './pages/index'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Home />      
    </BrowserRouter>
  );
}

export default App;
