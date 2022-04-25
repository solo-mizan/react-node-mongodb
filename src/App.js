import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import AddUser from './components/AddUser/AddUser';
import UpdateUser from './components/UpdateUser/UpdateUser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/user/add' element={<AddUser></AddUser>}></Route>
        <Route path='/user/update/:id' element={<UpdateUser></UpdateUser>}></Route>
      </Routes>
    </div>
  );
}

export default App;
