import React from 'react';
import { Button, Container, Nav, Navbar as Navbarbs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';
const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <Navbarbs sticky="top" className="bg-white shadow-sm mb-4">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/About" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
          <Button
            style={{ position: 'relative' }}
            variant="outline-primary"
            className=""
            onClick={openCart}
          >
            CART
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                color: '#fff',
                width: '1.5rem',
                height: '1.5rem',
                position: 'absolute',
                bottom: 0,
                right: 0,
                transform: 'translate(35%, 35%)',
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </Navbarbs>
  );
};

export default Navbar;
