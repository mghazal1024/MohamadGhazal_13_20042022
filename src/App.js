import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer/footer';
import Header from './components/Header/header'
import Homepage from './pages/Homepage';
import SigninPage from './pages/SigninPage';
import UserPage from './pages/UserPage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Axios from './services/axios';
import { profile } from './slices/User.js'

// function App() {

//   return (
//     <Router>
//       <div className="App">
//         <Header></Header>
//         <Routes>
//           <Route index element={<Homepage/>} />
//           <Route path="/sign-in" element={<SigninPage/>} />
//           <Route path="/user" element={<UserPage/>} />
//           {/* <Route path="/edit-user/" element={<EditUser/>} /> */}
//         </Routes>
//         <Footer></Footer>
//       </div>
//     </Router>
//   );
// }

// export default App;



function App() {

  const dispatch = useDispatch();
  const [connect, setConnect] = useState(false);
  const userData = useSelector((state) => state.user);


  const setResponse = (res) => {
    dispatch(profile({ ...res }));
    setConnect(true);
  }

  const tokenValidation = () => {
    const token = JSON.parse(localStorage.getItem('token'));
    if(token) {
      Axios('profile', {}, token)
        .then((res) => {
          setResponse(res);
        })
        .catch(() => {
          setConnect(false);
          localStorage.clear();
        })
    } else {
      setConnect(false);
    }
  };

  useEffect(() => {
    if(userData.user.status === 'connect') {
      setConnect(true);
    } else {
      tokenValidation();
    }
  }, [userData]);
  
  return (
    <Router>
      <div className="App">
        <Header isConnect={connect}></Header>
        <Routes>
          {connect 
          ?
          <Route path="/profile" element={<UserPage/>} />
          :
          <Route path="/login" element={<SigninPage/>} />
          }
          <Route exact path="/" element={<Homepage/>} /> 
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;