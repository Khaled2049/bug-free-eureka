import React from 'react';
import { Row, Col } from 'react-bootstrap';
import StoreItem from '../components/StoreItem';
import { useShoppingCart } from '../context/ShoppingCartContext';
const Store = () => {
  const { storeItems } = useShoppingCart();

  const renderStoreItems = () => {
    return storeItems.map((item: any) => {
      return (
        <Col key={item.id}>
          <StoreItem {...item} />
        </Col>
      );
    });
  };

  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {renderStoreItems()}
      </Row>
    </>
  );
};

export default Store;
