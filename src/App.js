import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer/footer';
import Header from './components/Header/header'
import Homepage from './pages/Homepage';
import SigninPage from './pages/SigninPage';
import UserPage from './pages/UserPage';
import EditUser from './pages/EditUser';

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route index element={<Homepage/>} />
          <Route path="/sign-in" element={<SigninPage/>} />
          <Route path="/user" element={<UserPage/>} />
          {/* <Route path="/edit-user/" element={<EditUser/>} /> */}
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
