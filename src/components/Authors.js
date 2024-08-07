import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Authors = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetch("/authors")
      .then((response) => response.json())
      .then((data) => setAuthors(data));
  }, []);

  return (
    <div>
      <h1>Authors</h1>
      <ul>
        {authors.map((author) => (
          <li key={author._id}>
            <Link to={`/authors/${author._id}`}>{author.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Authors;
