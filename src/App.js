import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
/* eslint-disable */
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import './App.css';
import logo from './components/img/image.png';
import { List } from 'react-bootstrap-icons';
import SideNav from './components/sideNav/SideNav';
import Create from './components/create/Create';
import Reserve from './components/reserve/Reserve';
import Home from './components/home/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/signup/Signup';
import CarDetail from './components/car_detail/CarDetail';

function App() {
  const modalDisplay = () => {
    const modal = document.querySelector('.modal-background');
    const opener = document.querySelector('#modal-displayer');
    const closer = document.querySelector('.X');
    const modal_nav_link = document.querySelectorAll('.modal_nav_link');

    function closeModal() {
      modal.style.visibility = 'hidden';
    }

    function callp() {
      modal.style.visibility = 'visible';
    }
    modal_nav_link.forEach((link) => {
      link.onclick = closeModal;
    });
    opener.onclick = callp;
    closer.onclick = closeModal;

    console.log('this is loading');
  };
  return (
    <div className="App">
      <Router>
        <div className="modal-background">
          <div className="modal">
            <div className="modal-header">
              <h2 className="modal-title">Menu</h2>
              <div className="X">
                <p>X</p>
              </div>
            </div>
            <div className="modal-body">
              <div className="mobile_logo_div">
                <img src={logo} alt="Logo" className="mobile_logo" />
              </div>
              <nav>
                <ul className="nav_ul">
                  <li className="nav_li">
                    <Link className=" modal_nav_link " to="/">Models</Link>
                  </li>
                  <li className="nav_li">
                    <Link className="modal_nav_link" to="/create">Create</Link>
                  </li>
                  <li className="nav_li">
                    <Link className="modal_nav_link" to="/reserve">Reserve</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <SideNav />
        <div className="pages">
          <button className="mobile_nav" onClick={modalDisplay} id="modal-displayer">
            <List size={20} />
          </button>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/create" element={<Create />} />
            <Route path="/reserve" element={<Reserve />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/car"
              element={(
                <Provider store={store}>
                  <CarDetail />
                </Provider>
            )}
            />
            <Route
              path="/"
              element={(
                <Provider store={store}>
                  <Home />
                </Provider>
            )}
            />
          </Routes>
        </div>
      </Router>

    </div>
  );
}

export default App;
