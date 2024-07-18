import React from "react";
import styled from "styled-components";

interface Book {
  isbn: string;
  title: string;
  author: string;
  image: string;
  description: string;
}

interface BookItemProps {
  book: Book;
}

const BookItem: React.FC<BookItemProps> = ({ book }) => {
  return (
    <Item>
      <p>{book.title}</p>
      <p>{book.author}</p>
      <img src={book.image} alt={book.title} />
      <p>{book.description}</p>
    </Item>
  );
};

const Item = styled.div``;
export default BookItem;
