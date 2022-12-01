import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Routes, Route, Navigate } from "react-router-dom";
import NewReview from "./Components/NewReview";
function App() {
  return (
    <Container className="my-3">
      <Routes>
        <Route path="/" element={<h1>TEST</h1>}></Route>
        <Route path="/new" element={<NewReview />}></Route>
        <Route path="/:id">
          <Route index element={<h1>Show</h1>} />
          <Route path="edit" element={<h1>edit</h1>} />
        </Route>
        <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
      </Routes>
    </Container>
  );
}

export default App;
