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
✅ Logout Functionality
✅ Modular Backend Structure
