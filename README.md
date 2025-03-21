URL Shortener
A URL shortener application built with React, Flask, and MySQL. This project allows users to shorten long URLs and manage them efficiently.

Project Overview
This URL Shortener application provides a simple, yet powerful way to shorten and track links. Users can input long URLs, and the app will generate a unique short link that redirects to the original URL.

Technologies Used
Frontend: React.js
Backend: Flask
Database: MySQL

Setup
Follow these steps to set up the project on your local machine.

Frontend (React)
Clone the repository:
git clone <https://github.com/prouch4/Tarea-acortamiento-URLs.git>
cd <your-project-folder>

Install dependencies:
npm install

Build the project (for production):
npm run build

Start the development server:
npm start
The React app will be available at http://localhost:3000.

Backend (Flask)
Navigate to the backend folder:
cd backend

Create a virtual environment (recommended):
python3 -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`

Install dependencies:
pip install -r requirements.txt

Run the Flask application:
python app.py
The Flask API will be available at http://localhost:5000.

Database (MySQL)
Install MySQL if you don't have it installed already.
Run the database.sql file
Configure database connection in config.py in the Flask app with your local MySQL credentials.

Running the Application
Make sure both the frontend and backend are running:
Start the React app:
npm start
Start the Flask app:
python app.py
Visit http://localhost:3000 to view the URL Shortener in action.