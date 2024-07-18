import React from "react";
import BookItem from "./BookItem";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

interface Book {
  isbn: string;
  title: string;
  author: string;
  image: string;
  description: string;
  pubdate: string;
  publisher: string;
}

interface BookListProps {
  books: Book[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
  return (
    <List>
      {books.map((book) => (
        <Link to={`/detail/${book.isbn}`} key={book.isbn}>
          <BookItem book={book} />
        </Link>
      ))}
    </List>
  );
};

const List = styled.div``;

export default BookList;
