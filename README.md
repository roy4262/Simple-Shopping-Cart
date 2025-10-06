# Simple Shopping Cart Application

> 🎥 **Loom Walkthrough**
> Watch the quick demo here:
> 👉 [View Loom Video](https://www.loom.com/share/dfb432dc05b546dca586a7a5074f783e?sid=79fae57e-3f11-4fe1-844e-dc662b60dd0c)
>
> <img width="800" alt="App Screenshot" src="https://github.com/user-attachments/assets/03ff1048-8685-44d5-894d-2978c535d6f4" />  
>
> *(Click the link above to view the demo/walkthrough.)*

---

## 🚀 Live Deployment

👉 [https://simple-shopping-cart-project-1.netlify.app/](https://simple-shopping-cart-project-1.netlify.app/)
*(If backend seems down, please refresh after ~20 seconds as the server may be waking up.)*

---

A simple full-stack e-commerce application built with React (frontend) and Node.js/Express (backend). Users can browse products, add items to their cart, and simulate checkout.

## Features

* Product catalog display with images and prices
* Add/remove items from cart
* Quantity management in cart
* Persistent cart using localStorage
* Checkout simulation (logs order to console)

## Tech Stack

* **Frontend**: React 19, Vite, CSS
* **Backend**: Node.js, Express, CORS
* **Testing**: Jest, Supertest

## Setup and Installation

### Prerequisites

* Node.js (v14 or higher)
* npm or yarn

---

### 🧭 Clone the Repository

1. Open your terminal and run:

   ```bash
   git clone https://github.com/roy4262/Simple-Shopping-Cart.git

   
### Backend Setup

1. Navigate to the backend directory:

   ```
   cd backend
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the backend server:

   ```
   npm run dev
   ```

   The server will run on `http://localhost:4000` (or port specified in `.env`)

### Frontend Setup

1. Navigate to the frontend directory:

   ```
   cd frontend
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the development server:

   ```
   npm run dev
   ```

   The app will be available at `http://localhost:5173` (or port specified in `.env`)

## Running Tests

### Backend Tests

1. Navigate to the backend directory:

   ```
   cd backend
   ```

2. Run the tests:

   ```
   npm test
   ```

Currently, there is one test that verifies the `/products` endpoint returns a list of products.

## Assumptions and Design Choices

* **Product Data**: Products are hardcoded in the backend for simplicity. In a real application, this would be stored in a database.
* **Cart Persistence**: Cart data is stored in the browser's localStorage to persist across sessions.
* **Checkout**: Checkout is simulated - it logs the order to the console and clears the cart. No actual payment processing is implemented.
* **Styling**: Basic CSS styling is used for simplicity. A production app would likely use a CSS framework or component library.
* **Error Handling**: Minimal error handling is implemented. Production applications should include comprehensive error handling and user feedback.
* **Security**: No authentication or authorization is implemented. CORS is enabled for development purposes.
* **Testing**: Only basic backend API tests are included. Frontend testing and integration tests would be added in a production app.
