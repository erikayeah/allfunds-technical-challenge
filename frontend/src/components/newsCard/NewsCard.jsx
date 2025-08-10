import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import style from "./NewsCard.module.css"; // Assuming you have a CSS module for styles

const NewsCard = ({ news, buttonArchive, buttonDelete }) => {
  console.log("NewsCard props:", news);

  const { title, description, date, content, author, archiveDate, _id } = news;

  return (
    <div>
      <Card className={style.card}>
        <Card.Body>
          <Card.Title className={style.title}>{title}</Card.Title>
          <Card.Text className={style.description}>{description}</Card.Text>
          <Card.Text className="list-group-flush">
            <Card.Text className={style.content}>{content}</Card.Text>
            <Card.Text className={style.author}>
              Publisded by {author} on {date}{" "}
            </Card.Text>
          </Card.Text>
        </Card.Body>
        <Card.Body className={style.buttonContainer}>
          {!archiveDate && (
            <button className={style.button} onClick={() => buttonArchive(_id)}>
              Archive
            </button>
          )}
          {archiveDate && (
            <button className={style.button} onClick={() => buttonDelete(_id)}>
              {" "}
              Remove{" "}
            </button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewsCard;
