import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
