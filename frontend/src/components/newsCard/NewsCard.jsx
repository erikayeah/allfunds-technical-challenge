import React from "react";

const NewsCard = ({ news, buttonArchive, buttonDelete }) => {
  console.log("NewsCard props:", news);

  const { title, description, date, content, author, archiveDate, _id } = news;

  return (
    <div
      style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}
    >
      {!archiveDate && (
        <button onClick={() => buttonArchive(_id)}>Archive</button>
      )}
      {archiveDate && <button onClick={() => buttonDelete(_id)}>Remove</button>}
      <h2>{title}</h2>
      <p>
        <strong>Description:</strong> {description}
      </p>

      <p>{content}</p>

      <p>
        Publisded by {author} on {date}{" "}
      </p>
      {archiveDate && (
        <p>Archived on {new Date(archiveDate).toLocaleDateString()}</p>
      )}
    </div>
  );
};

export default NewsCard;
