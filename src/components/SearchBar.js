import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <Form>
      <Form.Control
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
      />
    </Form>
  );
};

export default SearchBar;
