import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import React, {useState, useEffect} from "react";
import { List } from 'react-bootstrap-icons';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import './App.css';
import logo from './components/img/image.png';
import SideNav from './components/sideNav/SideNav';
import SideNavb from './components/sideNav/SideNavb';
import Create from './components/create/Create';
import ReserveList from './components/reserve/Reserve_list';
import Home from './components/home/Home';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';
import Signup from './components/auth/signup/Signup';
import CarDetail from './components/car_detail/CarDetail';
import { isConnect } from './Session';

function App() {
  const [sidenav, setSidenav] = useState(true);
  const modalDisplay = () => {
    const modal = document.querySelector('.nav_modal-background');
    const opener = document.querySelector('#nav_modal-displayer');
    const closer = document.querySelector('.X');
    const modalNavLink = document.querySelectorAll('.modal_nav_link');

    function closeModal() {
      modal.style.visibility = 'hidden';
    }

    function callp() {
      modal.style.visibility = 'visible';
    }
    modalNavLink.forEach((link) => {
      // eslint-disable-next-line no-param-reassign
      link.onclick = closeModal;
    });
    opener.onclick = callp;
    closer.onclick = closeModal;

    console.log('this is loading');
  };

  const verify = () => {
    isConnect().then((data) => {
      if (data !== true){
        setSidenav(false)
      } else {
      setSidenav(true)
      }
    })};

    useEffect(() => {
      verify();
    }, []);

  return (
    <div className="App">
      <Router>
        <div className="nav_modal-background">
          <div className="nav_modal">
            <div className="nav_modal-header">
              <h2 className="nav_modal-title">Menu</h2>
              <div className="X">
                <p>X</p>
              </div>
            </div>
            <div className="nav_modal-body">
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
        <>
        { sidenav ? <SideNav/> : <SideNavb/>}
        </>
        <div className="pages">
          <button type="button" className="mobile_nav" onClick={modalDisplay} id="nav_modal-displayer">
            <List size={20} />
          </button>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/create" element={<Create />} />
            <Route
              path="/reserve_list"
              element={(
                <Provider store={store}>
                  <ReserveList />
                </Provider>
            )}
            />
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
