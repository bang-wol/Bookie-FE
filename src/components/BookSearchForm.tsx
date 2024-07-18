import React, { useState } from "react";
import { styled } from "styled-components";

interface BookSearchFormProps {
  onSearch: (query: string) => void;
}

const BookSearchForm: React.FC<BookSearchFormProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button type="submit">search</Button>
    </Form>
  );
};

const Form = styled.form``;
const Input = styled.input``;
const Button = styled.button``;

export default BookSearchForm;
