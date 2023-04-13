# Blogify-API

Blogify-API is a RESTful API server built with Node.js and Express.js that provides endpoints for creating, reading, updating, and deleting blog posts. The API is secured with JWT authentication and uses MongoDB as the data store. It includes features such as search, pagination, and sorting to make it easier for clients to consume the data.

## Features

- Create, read, update, and delete blog posts
- Create, read, update, and delete comments
- User authentication and authorization
- User account management

## Getting started

  1. Clone the repository
  2. Run `npm install` to install the dependencies
  3. Create a `.env` file and add the necessary environment variables
  4. Run `npm run dev` to start the development server

## API endpoints

- GET `/api/posts` - get all blog posts
- GET `/api/posts/:id` - get a single blog post by id
- POST `/api/posts` - create a new blog post
- PUT `/api/posts/:id` - update a blog post by id
- DELETE `/api/posts/:id` - delete a blog post by id
- GET `/api/posts/search` - search blog posts by title, tags, or content
- GET `/api/posts/sort` - sort blog posts by date, title, or author
- GET `/api/posts/paginate` - paginate blog posts

## Authentication

Blogify-API uses JWT authentication to secure the endpoints. To access protected endpoints, clients must include a valid JWT token in the `Authorization` header of the request.

## Technologies used

- Node.js
- Express.js
- MongoDB
- JWT
- Mongoose
- Jest

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) - see the LICENSE.md file for details.
