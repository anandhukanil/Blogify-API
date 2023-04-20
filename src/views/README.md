# Blogify-API :stars:

Blogify-API is a RESTful API server built with Node.js and Express.js that provides endpoints for creating, reading, updating, and deleting blog posts. The API is secured with JWT authentication and uses MongoDB as the data store. It includes features such as search, pagination, and sorting to make it easier for clients to consume the data.

## Features

- Create, read, update, and delete blog posts :page_with_curl:
- Create, read, update, and delete comments :love_letter:
- Create, read, update, and delete users :man_technologist:
- API authentication and registration :lock_with_ink_pen:

## Getting started

  1. Clone the repository
  2. Run `npm install` to install the dependencies
  3. Create a `.env` file and add the necessary environment variables specified in `.env.sample` file
  4. Run `npm run dev` to start the development server

## API endpoints

### Posts :page_with_curl:

- GET `/api/posts` - get all blog posts, sorted and by paged
- GET `/api/posts/:id` - get a single blog post by id
- POST `/api/posts` - create a new blog post
- PUT `/api/posts/:id` - update a blog post by id
- DELETE `/api/posts/:id` - delete a blog post by id
- GET `/api/posts/search` - search blog posts by title, tags, or content

### Comments :love_letter:

- GET `/api/comments` - get all blog comments or comments by **postId**
- GET `/api/comments/:id` - get a single blog comment by id
- POST `/api/comments` - create a new blog comment
- PUT `/api/comments/:id` - update a blog comment by id
- DELETE `/api/comments/:id` - delete a blog comment by id

### Users 🧑‍💻

- GET `/api/users` - get all blog users
- GET `/api/users/:id` - get a single blog user by id
- POST `/api/users` - create a new blog user
- PUT `/api/users/:id` - update a blog user by id
- DELETE `/api/users/:id` - delete a blog user by id

## Authentication 🔒

Blogify-API uses **JWT authentication** to secure the endpoints. To access protected endpoints, clients must include a valid JWT token in the `Authorization` header of the request.

## Technologies used ⚙️

- Node.js
- Express.js
- MongoDB
- JWT
- Mongoose
- TypeScript

## Contributing 🤝

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License ©️

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) - see the LICENSE.md file for details.
