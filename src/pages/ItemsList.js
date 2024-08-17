import React, { useEffect, useState } from 'react';
import { Container, ListGroup, Spinner, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ItemsList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setItems(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching the items:', error);
        setError('Failed to load items.');
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

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
      </Container>
    );
  }

  return (
    <Container>
      <h2>Items List</h2>
      <ListGroup>
        {items.map((item) => (
          <ListGroup.Item key={item.id}>
            <Link to={`/items/${item.id}`}>{item.title}</Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default ItemsList;
