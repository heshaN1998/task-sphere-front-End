**TaskSphere – Task & Weekly Reporting Management System**.
# TaskSphere Frontend

TaskSphere Frontend is a modern web application for the *TaskSphere Task and Weekly Reporting Management System*. It provides an intuitive user interface for managers and team members to manage projects, tasks, users, and weekly reports.

## 🚀 Features

- User Authentication (JWT)
- Secure Login & Registration
- Dashboard Overview
- Project Management
- Task Management
- Weekly Report Management
- User Profile Management
- Responsive Design
- Protected Routes
- Role-Based Navigation

## Frontend

- React 19
- Vite
- React Router DOM
- Tailwind CSS v4
- Axios
- React Icons
- Context API

Make sure the following software is installed:

- Node.js (v20 or later)
- npm
- Git


##installation

Clone the repository
  git clone <repository-url>

Navigate to the project
  cd TaskSphere-Frontend

Install dependencies
  npm install

## Run the Development Server
npm run dev

The application will start at
http://localhost:5173
(frontend connects directly to the backend running on http://localhost:8082.)
didint use .env

##Build for Production
npm run build

##Authentication

TaskSphere Frontend communicates with the Spring Boot backend using *JWT Authentication*.

The authentication flow:

- User Login
- JWT Token Generation
- Token Storage
- Protected Routes
- Automatic Authorization Header using Axios

Must Remember Default Backend URL   http://localhost:8082
Must Remember Default Frontend URL  http://localhost:5173

