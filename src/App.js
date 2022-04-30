import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import MyItems from './pages/MyItems/MyItems';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/my-items' element={<MyItems></MyItems>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
