import React from 'react';
import Wish from './Wish';
import { useQuery, gql } from '@apollo/client';

const WISHLIST_QUERY = gql`
  {
    WishList {
      id
      url
      description
    }
  }
`;
const WishList = () => {
  const { data } = useQuery(WISHLIST_QUERY);
  console.log(data);
  return (
    <div>
      test
      {data.WishList.map((link: any) => (
        <Wish key={link.id} wish={link} />
      ))}
    </div>
  );
};

export default WishList;
