export type ReviewData = {
  title: string;
  markdown: string;
  tags: Tag[];
};

export type Tag = {
  id: string;
  label: string;
};

export type Review = {
  id: string;
} & ReviewData;
