import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import MyItems from './pages/MyItems/MyItems';
import ManageInventories from './pages/ManaegInventories/ManageInventories';
import Details from './pages/Details/Details';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Terms from './pages/Terms/Terms';
import Blogs from './pages/Blogs/Blogs';
import RequireAuth from './RequireAuth';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import AddNewItem from './pages/AddNewItem/AddNewItem';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/my-items' element={<MyItems></MyItems>}></Route>
        <Route path='/manage-inventories' element={
          <RequireAuth>
            <ManageInventories></ManageInventories>
          </RequireAuth>
        }></Route>
        <Route path='/car/:_id' element={
          <RequireAuth>
            <Details></Details>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/terms' element={<Terms></Terms>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path='/add-new-item' element={
          <RequireAuth>
            <AddNewItem></AddNewItem>
          </RequireAuth>
        }></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;