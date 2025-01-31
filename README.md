# Blog Application

This is a full-stack blog application built using React, Bootstrap, Node.js, and Express.

## Project Structure

## Prerequisites

- Node.js
- npm (Node Package Manager)
- PostgreSQL

## Getting Started

### Server Setup


1. Navigate to the `server` directory:

```sh
cd server
```

2. Install server dependencies:

```sh
npm install
```

3. Set up the PostgreSQL database:

- Create a database named `Blog`.
- Run the SQL script in db.sql to create the necessary tables.

4. Start the server:

```sh
nodemon server.js
```

The server will run on `http://localhost:3000`.

### Client Setup

1. Navigate to the weather directory:

```sh
cd client/weather
```

2. Install client dependencies:

```sh
npm install
```

3. Start the development server:

```sh
npm run dev
```

The client will run on `http://localhost:5173`.

## Available Scripts

### Server

- `npm start`: Starts the Express server.

### Client

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run lint`: Lints the codebase.
- `npm run preview`: Previews the production build.

## API Endpoints

### Posts

- `GET /api/posts`: Get all posts.
- `GET /api/posts/:id`: Get a specific post by ID.
- `POST /api/posts`: Create a new post.
- `PUT /api/posts/:id`: Update a post by ID.
- `DELETE /api/posts/:id`: Delete a post by ID.

### Categories

- `GET /api/categories`: Get all categories.
- `GET /api/categories/:id`: Get a specific category by ID.
- `POST /api/categories`: Create a new category.
- `PUT /api/categories/:id`: Update a category by ID.
- `DELETE /api/categories/:id`: Delete a category by ID.

## Technologies Used

- **Frontend**: React, React Router, Bootstrap
- **Backend**: Node.js, Express
- **Database**: PostgreSQL
- **Other**: Axios



