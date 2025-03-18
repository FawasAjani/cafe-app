import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Content from './components/content';
import Footer from './components/footer';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Order from './components/order';
import Basket from './components/basket';
import Payment from './components/payment';
import Read from './components/read';
import Edit from './components/edit';
import Contact from './components/contact';
import Review from './components/review';
import Menu from './components/menu';
import Logo from './images/cyber1logo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  //  Load basket from localStorage when app starts
  const [basket, setBasket] = useState(() => {
    const savedBasket = localStorage.getItem("basket");
    return savedBasket ? JSON.parse(savedBasket) : [];
  });

  // Save basket to localStorage 
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  //function to clear basket
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
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/order">Order</Nav.Link>
                <Nav.Link href="/basket">Basket</Nav.Link>
                <Nav.Link href="/payment">Payment</Nav.Link>
                <Nav.Link href="/read">CyberCafeX</Nav.Link>
                <Nav.Link href="/menu">Order Placed</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <Nav.Link href="/review">Review</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/read" element={<Read />} />
          <Route path="/order" element={<Order basket={basket} setBasket={setBasket} />} />
          <Route path="/basket" element={<Basket basket={basket} setBasket={setBasket} />} />
          <Route path="/payment" element={<Payment basket={basket} setBasket={setBasket} />} />
          <Route path="/payment" element={<Payment basket={basket} clearBasket={clearBasket} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/review" element={<Review />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
