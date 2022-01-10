import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import products from "../assets/data/products";
import { Product } from "../components/Product";

export const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};
