import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ProductComponent } from './Container/ProductComponetnt';
import ProductDetails from './Container/ProductDetails';
import { ProductListing } from './Container/productListing';
import Cart from './Container/Cart';
import LoginForm from './Forms/Loginform';
import RegisterForm from './Forms/Register';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { Header } from './Container/Header';

function App() {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies(["token"]);

  useEffect(() => {
    console.log('Cookies changed:', cookies.token);
  }, [cookies]);

  const isLoggedIn = cookies.token ? true : false;

  const handleLogout = () => {
    removeCookie('token');
    navigate('/');
  };

  return (
    <div>
      {isLoggedIn && <Header handleLogout={handleLogout} />}
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/home" element={<ProductListing />} />
            <Route path="/ProductComponent" element={<ProductComponent />} />
            <Route path="/Product/:id" element={<ProductDetails />} />
            <Route exact path="/cart" element={<Cart />} />
          </>
        ) : (
          <>
            <Route path="/" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
          </>
        )}
        {/* Redirect to home if authenticated or login if not */}
        <Route path="*" element={<Navigate to={isLoggedIn ? '/home' : '/'} />} />
      </Routes>
    </div>
  );
}

export default App;
