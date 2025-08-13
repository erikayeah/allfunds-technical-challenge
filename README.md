# allfunds-technical-challenge
# News App

**Client:** React, Bootstrap **Server:** Node, Express, MongoDB

Welcome!

This is a news management app.
Follow these steps to run the application locally.

## Frontend Setup

```bash
cd frontend
npm install
npm run dev 
```

## Backend Setup

```bash
cd backend
npm install
npm run dev
```

*Note: To run this backend, you will need to add the necessary variables to your .env file. You can use the .env.example file as a guide.*

---

### Description

In this project, you will be able to see active news in the **News** view, sort them by creation date, and archive them.

Then, in the **Archived News** view, you will be able to see previously archived news, sort them by archive date, and then remove them from the app.

The news is stored and retrieved from a news database in **MongoDB Atlas**.

---

### How to POST a news item

Send a POST request to: `http://localhost:PORT/news` You can test this endpoint with Thunder Client, Postman, or any other API testing tool.
Include the following JSON object in the request body:

```json
{
  "title": "string",
  "description": "string",
  "content": "string",
  "author": "string"
}
```
> **Note:** The date, which is also required, will be automatically added by the `createNews` function when the data is sent.

### How to POST multiple news items

Send a POST request to: `http://localhost:PORT/news/many` You can test this endpoint with Thunder Client, Postman, or any other API testing tool.
Include the following JSON array in the request body:

```json
[
{
  "title": "string",
  "description": "string",
  "content": "string",
  "author": "string"
},
{
  "title": "string",
  "description": "string",
  "content": "string",
  "author": "string"
},
{
  "title": "string",
  "description": "string",
  "content": "string",
  "author": "string"
}
]
```
> **Note:** The date, which is also required, will be automatically added to each news object using the `createManyNews` function when the data is sent.

---

## Documentation

- [MongoDB Node.js Driver](https://www.mongodb.com/docs/drivers/node/current/get-started/)
- [Express.js](https://expressjs.com/)
- [React Bootstrap](https://react-bootstrap.netlify.app/)
- [Node.js](https://nodejs.org/es/)

---

## Author

Erika Judith Fogar
