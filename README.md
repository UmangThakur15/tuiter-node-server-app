# Tuiter Full Stack Web App

## Overview

The Tuiter Full Stack Web App is a comprehensive social media platform that replicates the core functionalities of a microblogging service similar to Twitter. The application is divided into two main parts: a front-end built with React and a back-end powered by Node.js and Express, integrated with a MongoDB database. This README provides a detailed overview of both the front-end and back-end, including technologies used, key functionalities, design patterns, and architecture.

## Technologies Used

### Front-End
- **React**: A JavaScript library for building user interfaces using a component-based architecture.
- **JavaScript (ES6+)**: The main language for developing interactive and dynamic features.
- **CSS**: Used for styling the user interface, ensuring responsiveness and a consistent look and feel.
- **React Router**: Manages routing within the application, allowing for smooth navigation between different views.
- **Jest**: A testing framework used for writing and running tests on React components.

### Back-End
- **Node.js**: A JavaScript runtime built on Chrome's V8 engine, used for building the server-side of the application.
- **Express.js**: A web application framework for Node.js, used to build APIs and handle HTTP requests and responses.
- **MongoDB**: A NoSQL database used to store user data, tweets, and other application data.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB, used for schema-based modeling and interactions with the database.
- **JWT (JSON Web Tokens)**: Used for secure authentication and maintaining user sessions.

## Key Functionalities

### Front-End (React)
1. **User Interface**:
   - Responsive and dynamic design using reusable components like navigation bars, tweet cards, and user profiles.
   - Interactive elements such as buttons, forms, and modals for creating tweets, liking, and retweeting.

2. **Tweet Management**:
   - Create, view, like, and retweet tweets with instant updates in the feed.
   - Manage tweets within user profiles, displaying personal tweets and interactions.

3. **Routing & Navigation**:
   - Smooth navigation between different views using React Router.
   - Dynamic routes for accessing user profiles and detailed views of individual tweets.

4. **State Management**:
   - Local state management within components using React's `useState` and `useEffect` hooks.
   - Context API for global state management, handling user authentication and session data.

5. **API Integration**:
   - Fetch and post data to the back-end server using Axios or Fetch API.
   - Integration with the server's RESTful API to retrieve and manipulate data like user information and tweets.

6. **Testing**:
   - Unit testing of components using Jest to ensure consistent behavior and performance.

### Back-End (Node.js)
1. **Server Setup**:
   - **Express.js**: Handles HTTP requests, routing, and middleware.
   - **app.js**: The main entry point for the server, configuring middleware and routing.

2. **Controllers**:
   - **hello-controller.js**: A simple controller for testing server responses.
   - **tuits-controller.js**: Handles CRUD operations for tweets, including creating, reading, updating, and deleting tweets.
   - **auth-controller.js**: Manages user authentication, including login, registration, and JWT-based authentication.
   - **users-controller.js**: Manages user-related operations such as retrieving user profiles and updating user information.

3. **Data Access (DAO)**:
   - **users-dao.js**: Implements data access functions to interact with the MongoDB database, specifically for user data.
   - **users-model.js**: Defines the structure and schema for user data using Mongoose models.
   - **users-schema.js**: Defines the Mongoose schema for the user model, including fields like username, password, and email.

4. **Database**:
   - **MongoDB**: Stores user data, tweet data, and other relevant information in a NoSQL format.
   - **Mongoose**: Used to define schemas and interact with the MongoDB database in a structured way.

5. **Authentication**:
   - **JWT**: Securely manages user sessions, generating tokens upon login and validating them for protected routes.

## Design Patterns

### 1. **MVC (Model-View-Controller)**
   - **Description**: The MVC pattern is used to separate the concerns of the application. The **Model** manages data and business logic, the **View** is responsible for displaying the data, and the **Controller** handles user input and updates the model or view as necessary.
   - **Implementation**:
     - **Model**: Represented by Mongoose schemas and models, such as `users-model.js`.
     - **View**: In this project, the view is represented by the front-end React components.
     - **Controller**: Handled by the Express controllers, such as `users-controller.js` and `tuits-controller.js`.

### 2. **Singleton Pattern**
   - **Description**: Ensures that a class has only one instance and provides a global point of access to that instance.
   - **Implementation**: Applied in the connection to the MongoDB database using Mongoose. The connection instance is reused across different parts of the application.

### 3. **Observer Pattern**
   - **Description**: Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.
   - **Implementation**: Implemented using React's state management system where components observe changes in state and re-render accordingly.

### 4. **Factory Pattern**
   - **Description**: Used to create objects without having to specify the exact class of the object that will be created.
   - **Implementation**: The application of the factory pattern can be seen in the creation of different Mongoose models based on the schemas, abstracting the object creation process.

## Design Architecture

### 1. **Client-Server Architecture**
   - **Description**: The application follows a client-server architecture where the front-end (React) acts as the client, and the back-end (Node.js with Express) serves as the server. The client sends HTTP requests to the server, which processes them, interacts with the database if necessary, and sends back the appropriate responses.
   - **Communication**: The front-end and back-end communicate via RESTful API endpoints.

### 2. **RESTful API Design**
   - **Description**: The back-end exposes a set of RESTful API endpoints that allow the front-end to perform operations like creating, reading, updating, and deleting resources (e.g., users, tweets).
   - **Implementation**: The controllers in the back-end handle these requests, interact with the database using DAOs, and return JSON responses to the client.

### 3. **Component-Based Architecture (Front-End)**
   - **Description**: The front-end is structured using a component-based architecture. Each UI element or feature is encapsulated within a component, promoting reusability, modularity, and maintainability.
   - **Implementation**: Components are the building blocks of the React front-end, each managing its own state and rendering based on props and state changes.

### 4. **Service Layer (Back-End)**
   - **Description**: The service layer in the back-end encapsulates the business logic, acting as an intermediary between the controllers and the data access layer (DAOs). This layer ensures that the application logic is separated from the controllers, promoting code reusability and easier testing.
   - **Implementation**: The service layer is implied in how the DAOs and controllers interact, although explicitly creating a service layer is a best practice that can be adopted for larger projects.

## Getting Started

### Installation

#### Front-End
1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd tuiter-react-web-app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Front-End**:
   ```bash
   npm start
   ```

#### Back-End
1. **Navigate to the Server Directory**:
   ```bash
   cd tuiter-node-server-app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and configure the following:
   ```plaintext
   MONGO_URI=mongodb://localhost:27017/tuiter
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the Server**:
   ```bash
   node app.js
   ```

### Running the Full Stack Application
1. Start the back-end server.
2. Start the front-end development server.
3. Open `http://localhost:3000` to view the application.

## Conclusion

The Tuiter Full Stack Web App provides a robust implementation of a social media platform, combining a modern React-based front-end with a scalable Node.js back-end. The use of design patterns like MVC, Singleton, and Observer, along with a well-structured design architecture, makes the project highly maintainable and scalable, serving as a strong foundation for further development and enhancement.
