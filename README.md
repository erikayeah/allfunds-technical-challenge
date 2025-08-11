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
To run this backend, you will need to add the following environment variables to your .env file:

`PORT`
`USER_DB`
`PASSWORD_DB`
`SERVER_DB`
`NAME_DB` 

*Note: All variables ending with _DB refer to your MongoDB Atlas account credentials.*

---

### How to navigate the App
- When the frontend is running, you’ll enter the landing page.
- Click "Enter" to access the News section.

*News View*:
You can sort by publication date.
You can only archive them (cannot delete directly).

*Archived News View*:
You can sort by archive date.
You can remove them from the list if desired.
Once removed, they will not appear again.

---

### How to post a news

Send a **POST** request to: http://localhost:5100/news
You can test this endpoint using *Thunder Client, Postman, or any other API testing tool.*

Include the following JSON object in the **request body**:

```json
{
  "title": "string",
  "description": "string",
  "content": "string",
  "author": "string"
}
```
