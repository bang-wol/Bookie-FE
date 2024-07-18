import React, { useState } from "react";
import styled from "styled-components";
import BookSearchForm from "../components/BookSearchForm";
import axios from "../api/axiosConfig";
import BookList from "../components/BookList";

const Home: React.FC = () => {
  const [books, setBooks] = useState([]);

  const handleSearch = async (query: string) => {
    try {
      const response = await axios.get("/books/search", {
        params: { query },
      });
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books", error);
    }
  };

  return (
    <Container>
      <BookSearchForm onSearch={handleSearch} />
      <BookList books={books} />
    </Container>
  );
};

const Container = styled.div``;

export default Home;
