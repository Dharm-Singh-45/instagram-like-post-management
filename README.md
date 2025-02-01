PostApp

PostApp is a simple blogging platform that allows users to create, update, and delete posts with images. The project is built using React for the frontend and Express.js with MongoDB for the backend.

Features

View all posts with images and descriptions

Create a new post with an image

Edit existing posts with the ability to change images

Delete posts

Responsive UI using Tailwind CSS

Tech Stack

Frontend: React, React Router, Axios, Tailwind CSS

Backend: Node.js, Express.js, MongoDB

Image Upload: Multer

Installation

1. Clone the Repository

git clone https://github.com/your-username/PostApp.git
cd PostApp

2. Install Dependencies

Install frontend dependencies

cd frontend
npm install

Install backend dependencies

cd backend
npm install

3. Set Up Environment Variables

Create a .env file in the backend directory and add the following variables:

PORT  = 5000 
MONGO_URI = "mongodb+srv://dharmjat45dj:gKrhRVBxQAtkmLij@cluster0.n1nkl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


4. Run the Application

Start Backend Server

cd server
npm start

Start Frontend Server

cd client
npm start

The application will run at:

Frontend: http://localhost:5173

Backend: http://localhost:5000

API Endpoints

Method

Endpoint

Description

GET

/api/posts

Fetch all posts

GET

/api/posts/single-post/:id

Fetch a single post by ID

POST

/api/posts/create

Create a new post

PUT

/api/posts/update-post/:id

Update an existing post

DELETE

/api/posts/delete-post/:id

Delete a post

Folder Structure

PostApp/
│── client/  # React frontend
│── server/  # Express backend
│── README.md  # Project documentation

Future Enhancements

Implement user authentication

Add like and comment features

Improve UI with better animations