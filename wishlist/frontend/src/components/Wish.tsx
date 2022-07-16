import React from 'react';

interface IWish {
  description: string;
  url: string;
}

type WishProps = {
  wish: IWish;
};

const Wish = (props: WishProps) => {
  const { wish } = props;
  return (
    <div>
      <div>
        {wish.description} ({wish.url})
      </div>
    </div>
  );
};

export default Wish;
