# allfunds-technical-challenge
# News App

**Client:** React, Bootstrap
**Server:** Node, Express, MongoDB

Welcome!
This is a news management app with a frontend and backend.
Follow these steps to get the application running and start playing with it.

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

In this project, you will be able to see active news in the **News** view, sort them by creation date, and archive them.

Then, in the **Archived News** view, you will be able to see previously archived news, sort them by archive date, and then remove them from the app.

The news are stored and retrieved from a news database in **MongoDB Atlas**.

---

### How to POST news

Send a POST request to: http://localhost:PORT/news You can use this endpoint with Thunder Client, Postman, or any other API testing tool.
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

### How to POST multiple news

Send a POST request to: http://localhost:PORT/news/many You can use this endpoint with Thunder Client, Postman, or any other API testing tool.
Include the following JSON object in the request body:

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
