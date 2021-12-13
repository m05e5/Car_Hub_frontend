import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import SideNav from './components/sideNav/SideNav';
import Create from './components/create/Create';
import Reserve from './components/reserve/Reserve';
import Home from './components/home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <SideNav />
        <div className='pages'>
          <Routes>
            <Route path="/create" element={ <Create /> } />
            <Route path="/reserve" element={ <Reserve /> } />
            <Route path="/" element={ <Home /> } />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
