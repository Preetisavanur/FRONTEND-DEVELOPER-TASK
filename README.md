📌 Overview

This is a full-stack web application built as part of the Frontend Developer Internship assignment.

The application demonstrates:

Secure JWT-based authentication

Protected dashboard routes

Profile display

Full CRUD operations on tasks

Search and filter functionality

Scalable and modular backend structure

🛠 Tech Stack
Frontend

React (Vite)

React Router DOM

Axios

TailwindCSS

Backend

Node.js

Express

MongoDB (Mongoose)

JWT Authentication

bcrypt password hashing

🔐 Authentication Flow

User registers → Password hashed using bcrypt.

User logs in → JWT token generated.

Token stored in localStorage.

Token sent in Authorization header for protected routes.

Backend verifies token using authentication middleware.

📊 Features Implemented

✅ User Registration
✅ User Login
✅ JWT Authentication
✅ Protected Routes
✅ User Profile Display
✅ Create Task
✅ View Tasks
✅ Update Task Status
✅ Delete Task
✅ Search Tasks
✅ Filter by Status

Perfect 👍
I’ll give you clean copy-paste setup instructions that you can directly put into your README.

Just copy everything below 👇

⚙️ Setup Instructions
📦 1. Clone the Repository
git clone <YOUR_GITHUB_REPO_LINK>
cd frontend-developer-task

🖥️ 2. Backend Setup
Step 1: Navigate to backend folder
cd backend

Step 2: Install dependencies
npm install

Step 3: Create a .env file inside the backend folder

Create a file named:

.env


Add the following:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Step 4: Start backend server
npx nodemon server.js


If successful, you should see:

MongoDB connected
Server is running on port 5000


Backend runs on:

http://localhost:5000

🌐 3. Frontend Setup

Open a new terminal.

Step 1: Navigate to frontend folder
cd frontend/vite-project

Step 2: Install dependencies
npm install

Step 3: Start development server
npm run dev


Frontend runs on:

http://localhost:5173

🔐 4. Usage Flow

Register a new user

Login using credentials

Access dashboard

Create, update, delete tasks

Use search and filter options

Logout securely

🛠 Requirements

Make sure you have installed:

Node.js (v18 or higher recommended)

npm

MongoDB Atlas account (or local MongoDB)
✅ Logout Functionality
✅ Modular Backend Structure
