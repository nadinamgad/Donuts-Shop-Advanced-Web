import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";


export default function Menu() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/products");
        setProducts(response.data);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          
        </Col>
      </Row>

      <Row>
        {products.map((product) => (
          <Col key={product._id} md={6} lg={6}>
            <div className="text-center" style={{marginTop:"2rem"}}>
              <h2>{product.name}</h2>
              <p>{product.category}</p>
              <p>{product.price}</p>
              <p>{product.description}</p>
              <img
                src={product.image}
                alt={product.name}
                className="img-fluid"
              />
              <div className="">
                <Button variant="success">Add to Cart</Button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
