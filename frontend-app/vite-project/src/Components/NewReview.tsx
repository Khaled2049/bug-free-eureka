import React from "react";
import ReviewForm from "./ReviewForm";
import { ReviewData } from "../types/index";

type NewReviewProps = {
  onSubmit: (data: ReviewData) => void;
};

const NewReview = ({ onSubmit }: NewReviewProps) => {
  return (
    <div>
      <h1 className="mb-4">New Review</h1>
      <ReviewForm onSubmit={onSubmit} />
    </div>
  );
};

export default NewReview;
