GitHub Repositories Web App
This web application fetches GitHub repositories using the GitHub API and displays them in a user-friendly interface with pagination and filtering capabilities.

Table of Contents
Demo
Features
Technologies Used
Installation
Usage
Error Boundary and 404 Page
Deployment
License

Demo
Provide a link to the live demo of your application hosted on Netlify, Vercel, or any other platform.

Features
Fetches GitHub repositories using GitHub REST API.
Paginates through repositories with a configurable page size.
Implements search and filter functionality to find repositories by name, language, etc.
Clicking on a repository navigates to a detailed view with information about that repository.
Error Boundary to handle and display errors gracefully.
Custom 404 page for handling navigation to non-existent routes.
Responsive and accessible design for various screen sizes and user accessibility needs.

Technologies Used
React.js
React Router for navigation and nested routes
Axios for API requests
GitHub REST API (API version: 2022-11)
Bootstrap or CSS Framework for styling (optional)

Installation
Clone the repository
Install dependencies
Start the development server
Open http://localhost:3000 in your browser
The application will load, fetch your GitHub repositories, and display them on the homepage. You can navigate through pages, search for specific repositories, and click on a repository to view detailed information.

Error Boundary and 404 Page

Error Boundary:
The application includes an Error Boundary component (ErrorBoundary.js) to catch and display errors that occur during rendering or within child components.

404 Page:
A custom 404 page (NotFound.js) is implemented to handle navigation to non-existent routes within the application.

Deployment
The application is deployed on Netlify for hosting.

License
This project is licensed under the MIT License. See the LICENSE file for details.