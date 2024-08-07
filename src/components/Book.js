import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Book = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`/books/${id}`)
      .then((response) => response.json())
      .then((data) => setBook(data));
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <p>Author: {book.author.name}</p>
      <p>Published Date: {new Date(book.publishedDate).toLocaleDateString()}</p>
    </div>
  );
};

export default Book;
