import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/footer';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './components/home';
import Order from './components/order';
import Basket from './components/basket';
import Payment from './components/payment';
import Edit from './components/edit';
import Contact from './components/contact';
import Review from './components/review';
import Menu from './components/menu';
import Login from './components/login';
import Signup from './components/Signup';
import Logo from './images/cyber1logo.png';

function App() {
  const [basket, setBasket] = useState(() => {
    const savedBasket = localStorage.getItem("basket");
    return savedBasket ? JSON.parse(savedBasket) : [];
  });

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  // Authentication State
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setAuth(!!token);
  }, []);

  // Logout Function
  const handleLogout = () => {
    localStorage.removeItem("token");
    setAuth(false);
  };

  // Function to clear basket
  const clearBasket = () => {
    setBasket([]); 
    localStorage.removeItem("basket");
  };

  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar bg="light" variant="light" expand="lg" className="px-3">
          <Container>
            <Navbar.Brand href="/">
              <img src={Logo} width="auto" height="30" className="d-inline-block align-top" alt="CyberCafeX Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                {!auth ? (
                  <>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/signup">Signup</Nav.Link>
                  </>
                ) : (
                  <>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/order">Order</Nav.Link>
                    <Nav.Link href="/basket">Basket</Nav.Link>
                    <Nav.Link href="/payment">Payment</Nav.Link>
                    <Nav.Link href="/review">Review</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Routes */}
        <Routes>
          <Route path="/login" element={<Login setAuth={setAuth} />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Routes */}
          <Route path="/" element={auth ? <Home /> : <Navigate to="/" />} />
          <Route path="/order" element={auth ? <Order basket={basket} setBasket={setBasket} /> : <Navigate to="/order" />} />
          <Route path="/basket" element={auth ? <Basket basket={basket} setBasket={setBasket} clearBasket={clearBasket} /> : <Navigate to="/basket" />} />
          <Route path="/payment" element={auth ? <Payment basket={basket} clearBasket={clearBasket} /> : <Navigate to="/payment" />} />
          <Route path="/review" element={auth ? <Review /> : <Navigate to="/review" />} />
          <Route path="/contact" element={auth ? <Contact /> : <Navigate to="/contact" />} />
          <Route path="/menu" element={auth ? <Menu /> : <Navigate to="/menu" />} />
          <Route path="/edit/:id" element={auth ? <Edit /> : <Navigate to="/edit" />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
