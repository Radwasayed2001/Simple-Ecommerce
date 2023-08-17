import logo from './logo.svg';
import './App.css';
import Products from './Components/Products/Products';
import Login from './Components/Login/Signup/Signup';
import Todo from './Components/ToDo/Todo';
import Nav from './Components/Nav/Nav';
import { Route, Routes } from 'react-router-dom';
import Form from './Components/Form/Form';
import Counter from './Components/Counter/Counter';
import { useState } from 'react';
import { counterContext } from './Components/config/CounterContext';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';
import CartPage from './Components/Cart/CartPage';
function App() {
    var [count,setCounter] = useState(0);
  return (
    <div id='myapp'>
      <Provider store={store}>
      <counterContext.Provider value={{count,setCounter}}>
      <Nav>
      </Nav>
      <Routes>
        <Route path='Todo' element={<Todo></Todo>} />
        <Route path='products' element={<Products/>} />
        <Route path='login' element={<Login/>} />
        <Route path='register' element={<Form></Form>} />
        <Route path='cart' element={<CartPage></CartPage>}/>
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
      </counterContext.Provider>
      </Provider>
    </div>
  );
}

export default App;
