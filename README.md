# Vite and React Project with Node, Express, and Mongoose

This project is a full-stack application that utilizes Vite and React for the frontend, and Node, Express, and Mongoose for the backend. The application features user authentication with login and register functionality, as well as a home page that fetches and displays a list of users from a MongoDB database.

## Features

*   User authentication with login and register functionality
*   Home page that fetches and displays a list of users from a MongoDB database
*   Utilizes Redux for state management
*   Created with Vite and React for the frontend
*   Utilizes Node, Express, and Mongoose for the backend
*   Connects to a MongoDB database using a .env file for environment variables

## Installation

To install this project, follow these steps:

1.  Clone the repository using the following command:

    ```bash
git clone https://github.com/parth24917/user.git

2. Navigate to the project directory 
cd user
3. Install required dependencies
npm install
4. Start the dev server:
npm run dev
5. Navigate to the server folder in new terminal:
cd server
6. for backend - Make sure to create a .env file in the server folder of  project with the following environment variables:
MONGO_URL=mongodb+srv://your-username:your-password@your-cluster-url/
Replace your-username, your-password, and your-cluster-url with your actual MongoDB credentials and cluster URL.

7.Install the required dependencies:
npm install

8. Start the backend server:
npm run server.js
## Usage

To use this project, follow these steps:

1.  Open your web browser and navigate to `http://localhost:5173/register`.
2.  Click on the "Register" button to create a new user account.
3.  Fill out the registration form with your desired username, email, and password.
4.  Click on the "Login" button to log in to your account.
5.  Once logged in, go to `http://localhost:5173/home`, which displays a list of users from the MongoDB database.

