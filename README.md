# social-network

## Description
This project showcases the creation of a robust API for a social networking web application using Express.js, MongoDB, and the Mongoose ODM. The API allows users to share thoughts, react to friends' thoughts, and manage their friend list. MongoDB was chosen for its speed in handling large amounts of data and its flexibility with unstructured data.

## Getting Started
To get started with this project, follow the steps below:

1. Clone the Repository

2. Install Dependencies: npm install

3. Configure MongoDB: Make sure you have a MongoDB server running locally or provide the appropriate connection URI in the config.js file.

4. Start the Server: npm start

5. Test Routes: Use tools like Insomnia or Postman to test the API routes.

## API Routes
### Users
* GET /api/users: Retrieve a list of all users along with their details.
* POST /api/users: Create a new user.
* PUT /api/users/:userId: Update user information by specifying the user's ID.
* DELETE /api/users/:userId: Delete a user by specifying the user's ID.
### Thoughts
* GET /api/thoughts: Get all thoughts along with associated user details.
* POST /api/thoughts: Create a new thought.
* PUT /api/thoughts/:thoughtId: Update a thought by providing its ID.
* DELETE /api/thoughts/:thoughtId: Delete a thought by providing its ID.
### Reactions
* POST /api/thoughts/:thoughtId/reactions: Add a reaction to a thought.
* DELETE /api/thoughts/:thoughtId/reactions/:reactionId: Remove a reaction from a thought.
### Friends
* POST /api/users/:userId/friends/:friendId: Add a user to the friend list of another user.
* DELETE /api/users/:userId/friends/:friendId: Remove a user from the friend list.
## Walkthrough Video
Link to Walkthrough Video


## Technologies Used
* Express.js
* MongoDB
* Mongoose ODM

## Contact
