# Simple Notes CRUD Application with Firebase

This is a simple CRUD (Create, Read, Update, Delete) application for managing notes, built with Node.js, TypeScript, and Firebase as the database.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- TypeScript
- Firebase account

### Installation

1. Clone the repository
    ```
    git clone https://github.com/freidev/note-api-node.git
    ```
2. Navigate into the project directory
    ```
    cd note-api-node
    ```
3. Install the dependencies
    ```
    npm install
    ```
4. Set up Firebase
    - Create a Firebase project in the Firebase console.
    - Generate a private key file for your service account.
    - Place the service account key file in your project directory and rename it to `firebase-service-account.json`.
5. Compile TypeScript to JavaScript
    ```
    tsc
    ```
6. Start the server
    ```
    npm start
    ```

## Usage

This application provides the following endpoints:

- `GET /notes`: Fetch all notes from Firebase
- `POST /notes`: Create a new note in Firebase
- `GET /notes/:id`: Fetch a single note by ID from Firebase
- `PUT /notes/:id`: Update a note by ID in Firebase
- `DELETE /notes/:id`: Delete a note by ID from Firebase

## Contributing

Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
