import logo from './logo.svg';
import './App.css';
import Products from './Components/Products/Products';
import Login from './Components/Login/Signup/Signup';
import Todo from './Components/ToDo/Todo';
import Nav from './Components/Nav/Nav';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div id='myapp'>
      <Nav>
      </Nav>
      <Routes>
        <Route path='Todo' element={<Todo></Todo>} />
        <Route path='products' element={<Products/>} />
        <Route path='login' element={<Login/>} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
