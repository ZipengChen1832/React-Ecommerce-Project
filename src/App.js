import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Product from './components/Product/Product'
import Products from './components/Product/Products'
import Cart from './components/Cart/Cart'
import Error from './components/Error/Error'
import About from './components/About/About'
import Account from './components/Account/Account'
import PrivateRouter from './authentication/PrivateRouter';
import Signup from './components/authentication/Signup';
import Signin from './components/authentication/Signin';
import AuthProvider from './authentication/AuthContext';

function App() {
  return <BrowserRouter>
  <AuthProvider>

    <Routes>
      <Route path="/" element={<Nav/>}>
        
        <Route path="/" element={<Home/>}/>
        {/* <Route path="products" element={<Product id="1"/>}/> */}
        <Route path="/products" element={<Products/>}>
          {/* <Route path=":id" element={<Product/>}/> */}
        </Route>
        <Route path="/products/:id" element={<Product/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="*" element={<Error/>}/>
    
        <Route element={<PrivateRouter/>}>
          <Route path="/account" element={<Account/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Route>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
    
        </Route>
    </Routes>
  </AuthProvider>
  </BrowserRouter>
}

export default App;
