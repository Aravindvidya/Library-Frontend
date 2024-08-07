import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Author = () => {
  const { id } = useParams();
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    fetch(`/authors/${id}`)
      .then((response) => response.json())
      .then((data) => setAuthor(data));
  }, [id]);

  if (!author) return <div>Loading...</div>;

  return (
    <div>
      <h1>{author.name}</h1>
      <p>{author.bio}</p>
      <a href={author.website}>{author.website}</a>
    </div>
  );
};

export default Author;
