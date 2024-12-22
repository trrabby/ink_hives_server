# Ink Hives Server

Welcome to the Ink Hives Server project! This repository contains the server-side code for the Ink Hives web application. Ink Hives is a platform designed to manage and organize various data and user interactions in an efficient and scalable manner.

## Overview

The Ink Hives Server is the backend of the Ink Hives platform, handling user authentication, data storage, and API endpoints that connect the frontend to the backend. This project is built with modern technologies to ensure high performance and scalability.

## Features

- **User Authentication**: Secure sign-up and login functionality.
- **RESTful API**: Easily extendable API to manage data and communicate with the frontend.
- **Data Persistence**: Stores and retrieves data from a database, ensuring durability.
- **Scalability**: Designed with modularity and scalability in mind for future growth.

## Getting Started

To get started with the Ink Hives Server, follow these steps:

### Prerequisites

Ensure that you have the following installed on your local machine:

- **Node.js**: Install [Node.js](https://nodejs.org/)
- **npm**: Comes with Node.js installation
- **Database**: MongoDB

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/trrabby/ink_hives_server.git
   ```

2. Navigate to the project directory:

   ```sh
   cd ink_hives_server
   ```

3. Install dependencies:

   ```sh
   npm install
   ```

4. Set up the environment variables:

   Create a file and configure the necessary values for your environment (e.g., database connection, secret keys).

5. Run the development server:

   ```sh
   npm run startDev
   ```

   This will start the server locally at [http://localhost:5000](http://localhost:5000).

## API Documentation

For detailed information on how to interact with the Ink Hives API, refer to the API documentation.

The API includes various endpoints for managing users, data, and more.

### Endpoints

1. **POST** `/api/auth/register` - Register a new user.
2. **POST** `/api/auth/login` - Log in an existing user.
3. **POST** `/api/blogs` - Create Blog.
4. **PATCH** `/api/blogs/:id` - Update Blog.
5. **DELETE** `/api/blogs/:id` - Delete Blog.
6. **GET** `/api/blogs` - Get All Blogs (Public).
7. **PATCH** `/api/admin/users/:userId/block` - Block User by Admin.
8. **DELETE** `/api/admin/blogs/:id` - Delete Blog.

## Contributing

We welcome contributions to the Ink Hives Server project! To contribute:

1. Fork the repository.
2. Create a new branch:

   ```sh
   git checkout -b feature-name
   ```

3. Make your changes.
4. Commit your changes:

   ```sh
   git commit -am 'Add new feature'
   ```

5. Push to the branch:

   ```sh
   git push origin feature-name
   ```

6. Submit a pull request.

Please ensure that your code follows the existing style and includes tests for new features or fixes.
