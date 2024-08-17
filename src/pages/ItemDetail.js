import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Card, Spinner, Alert, Button } from 'react-bootstrap';
import axios from 'axios';

const ItemDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        setItem(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching the item:', error);
        setError('Failed to fetch item details.');
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="text-center mt-5">
        <Alert variant="danger">
          {error}
        </Alert>
        <Button onClick={() => navigate(-1)}>Go Back</Button>
      </Container>
    );
  }

  if (!item) {
    return <Container className="text-center mt-5"><p>Item not found</p></Container>;
  }

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.body}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ItemDetail;
