export type Review = {
  id: string;
} & ReviewData;

export type RawReview = {
  id: string;
} & RawReviewData;

export type RawReviewData = {
  title: string;
  markdown: string;
  tagIds: string[];
};

export type ReviewData = {
  title: string;
  markdown: string;
  tags: Tag[];
};

export type Tag = {
  id: string;
  label: string;
};
