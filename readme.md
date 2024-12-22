<h1>Ink Hives Server</h1>

Welcome to the Ink Hives Server project! This repository contains the server-side code for the Ink Hives web application. Ink Hives is a platform designed to manage and organize various data and user interactions in an efficient and scalable manner.

#Overview

The Ink Hives Server is the backend of the Ink Hives platform, handling user authentication, data storage, and API endpoints that connect the frontend to the backend. This project is built with modern technologies to ensure high performance and scalability.

#Features

User Authentication: Secure sign-up and login functionality.
RESTful API: Easily extendable API to manage data and communicate with the frontend.
Data Persistence: Stores and retrieves data from a database, ensuring durability.
Scalability: Designed with modularity and scalability in mind for future growth.
Getting Started
To get started with the Ink Hives Server, follow these steps:

#Prerequisites
Ensure that you have the following installed on your local machine:

Node.js: Install Node.js
npm: Comes with Node.js installation
Database: MongoDB

#Installation
Clone the repository:

git clone https://github.com/trrabby/ink_hives_server.git
Navigate to the project directory:

#Install dependencies:

npm install

#Set up the environment variables:

Create a .env file, Configure the necessary values for your environment (e.g., database connection, secret keys).

#Run the development server:

npm run startDev
This will start the server locally at http://localhost:5000.

#API Documentation
For detailed information on how to interact with the Ink Hives API, refer to the API documentation.

The API includes various endpoints for managing users, data, and more.

Endpoints:
POST /api/auth/register - Register a new user
POST /api/auth/login - Log in an existing user
POST /api/blogs - Create Blog
PATCH /api/blogs/:id - Update Blog
DELETE /api/blogs/:id - Delete Blog
GET /api/blogs - Get All Blogs (Public)
PATCH /api/admin/users/:userId/block - Block User by Admin
DELETE /api/admin/blogs/:id -  Delete Blog



#Contributing
We welcome contributions to the Ink Hives Server project! To contribute:

Fork the repository.
Create a new branch (git checkout -b feature-name).
Make your changes.
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature-name).
Submit a pull request.
Please ensure that your code follows the existing style and includes tests for new features or fixes.
