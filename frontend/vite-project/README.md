🚀 Scalable Web App with Authentication & Dashboard
📌 Overview

This is a full-stack web application built using:

Frontend: React (Vite) + TailwindCSS

Backend: Node.js + Express

Database: MongoDB

Authentication: JWT-based authentication with bcrypt password hashing

The application allows users to:

Register & Login securely

Access a protected dashboard

Perform full CRUD operations on tasks

Search and filter tasks

Logout securely

🛠 Tech Stack
Frontend

React 18

React Router DOM

Axios

TailwindCSS

Backend

Node.js

Express

MongoDB (Mongoose)

JWT

bcryptjs

🔐 Authentication Flow

User registers → password hashed using bcrypt.

User logs in → JWT token generated.

Token stored in localStorage.

Token sent in Authorization header for protected routes.

Backend verifies token using middleware.

📊 Features Implemented

✅ User Registration
✅ User Login
✅ JWT Authentication
✅ Protected Routes
✅ Task CRUD (Create, Read, Update, Delete)
✅ Search Functionality
✅ Filter by Status
✅ Logout Flow
✅ Clean Responsive UI

🚀 Scalability Approach

For production scalability:

Frontend and backend are separated for independent scaling.

JWT authentication is stateless → allows horizontal scaling.

Environment variables used for secure configuration.

API routes are modularized for maintainability.

Database can be migrated to managed cloud MongoDB cluster.

Pagination can be added for large datasets.

Frontend can be deployed via CDN (Vercel/Netlify).

🎯 Evaluation Highlights

Clean UI and UX

Secure password handling

Token validation middleware

Modular code structure

Production-ready architecture