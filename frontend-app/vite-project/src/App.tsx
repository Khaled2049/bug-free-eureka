import "bootstrap/dist/css/bootstrap.min.css";
import { useLocalStorage } from "./useLocalStorage";
import { Container } from "react-bootstrap";
import { Routes, Route, Navigate } from "react-router-dom";
import NewReview from "./Components/NewReview";
import { RawReview, Tag } from "./types";
import { useMemo } from "react";
import { ReviewData, RawReviewData } from "./types/index";
import { v4 as uuidV4 } from "uuid";

function App() {
  const [reviews, setreviews] = useLocalStorage<RawReview[]>("reviews", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("tags", []);

  const reviewsWithTags = useMemo(
    () =>
      reviews.map((note) => {
        return {
          ...reviews,
          tags: tags.filter((tag) => note.tagIds.includes(tag.id)),
        };
      }),
    [reviews, tags]
  );

  function onCreateReview({ tags, ...data }: ReviewData) {
    setreviews((prevNotes) => {
      return [
        ...prevNotes,
        { ...data, id: uuidV4(), tagIds: tags.map((tag) => tag.id) },
      ];
    });
  }

  return (
    <Container className="my-3">
      <Routes>
        <Route path="/" element={<h1>TEST</h1>}></Route>
        <Route
          path="/new"
          element={<NewReview onSubmit={onCreateReview} />}
        ></Route>
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
