
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
   {/*-------------------------------------HEADER SECTION----------------------------------------------------------*/}
    <Header/>
    {/*-------------------------------------HEADER SECTION----------------------------------------------------------*/}


  {/*------------------------------------ROUTES-----------------------------------*/}
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/cart' element={<Cart/>}></Route>
</Routes>


  {/*------------------------------------ROUTES-----------------------------------*/}



  {/*-------------------------------------SITE BODY----------------------------------------------------------------*/}

  {/*-------------------------------------SITE BODY----------------------------------------------------------------*/}
  </BrowserRouter>

    );
}

export default App;
