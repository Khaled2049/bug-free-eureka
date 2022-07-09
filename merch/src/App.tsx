import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import News from './pages/News';
import Pics from './pages/Pics';
import Navbar from './components/Navbar';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
// import { StoreItemsContext } from './context/StoreItemsContext';
function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pics" element={<Pics name="Michael Hui" />} />
          {/* <StoreItemsContext.Provider value="test"> */}
          <Route path="/store" element={<Store />} />
          {/* </StoreItemsContext.Provider> */}
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
