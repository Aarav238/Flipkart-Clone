# Flipkart-Clone

Flipkart-Clone is a web application that aims to replicate the functionality and design of the popular e-commerce platform Flipkart.

## Features

- User registration and login functionality
- Browse and search for products
- View product details, including images, descriptions, and pricing
- Add products to the shopping cart
- Manage the shopping cart, including adding, updating, and removing items
- Proceed to checkout and place orders

## Technologies Used

- React.js for the frontend and building user interfaces.
- Redux for state management
- Node.js for backend and user authentication.
- Express.js for server management.
- MongoDB for database management and user authentication.

## Installation

To set up the Flipkart-Clone application locally, follow these steps:

1. Clone the repository to your local machine:
```bash
git clone https://github.com/Aarav238/Flipkart-Clone.git
```

2. Navigate to the project directory:
```bash
cd client
npm install
cd ../server
npm install
```

4. Set up the environment variables:
- Create a `.env` file in the `server` directory.
- Add the following environment variables:
  ```
  URL=<your_mongodb_uri>
  PORT=<port>
  ```

5. Start the frontend and backend servers:
- In the `client` directory, run:
  ```
  npm start
  ```
- In the `server` directory, run:
  ```
  npm run dev
  ```

6. Open your web browser and navigate to http://localhost:3000 to access the Flipkart-Clone application.




