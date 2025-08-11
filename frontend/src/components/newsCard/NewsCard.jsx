import React from "react";
import Card from "react-bootstrap/Card";
import style from "./NewsCard.module.css";

const NewsCard = ({ news, confirmArchive, confirmRemove }) => {
  const { title, description, date, content, author, archiveDate, _id } = news;
  const dateFormatted = new Date(date).toLocaleDateString("en-GB");

  return (
    <div>
      <Card className={style.card}>
        <Card.Body>
          <Card.Title className={style.title}>{title}</Card.Title>
          <Card.Text className={style.description}>{description}</Card.Text>

          <Card.Text className={style.content}>{content}</Card.Text>
          <Card.Text className={style.author}>
            {!archiveDate
              ? `Published by ${author} on ${dateFormatted}`
              : `Author ${author} and archived on ${dateFormatted}`}
          </Card.Text>
        </Card.Body>
        <Card.Body className={style.buttonContainer}>
          {!archiveDate && (
            <button
              className={style.button}
              onClick={() => confirmArchive(_id)}
            >
              Archive
            </button>
          )}
          {archiveDate && (
            <button className={style.button} onClick={() => confirmRemove(_id)}>
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
