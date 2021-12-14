import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore'
import './App.css';
import SideNav from './components/sideNav/SideNav';
import Create from './components/create/Create';
import Reserve from './components/reserve/Reserve';
import Home from './components/home/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/signup/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <SideNav />
        <div className='pages'>
          <Routes>
            <Route path="/create" element={ <Create /> } />
            <Route path="/reserve" element={ <Reserve /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/signup" element={ <Signup /> } />
            <Route path="/" element={
              <Provider store={store}> 
              <Home />
            </Provider>
            } />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
