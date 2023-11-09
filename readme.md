# Simple Notes CRUD Application

This is a simple CRUD (Create, Read, Update, Delete) application for managing notes, built with Node.js and TypeScript.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- TypeScript

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
4. Compile TypeScript to JavaScript
    ```
    tsc
    ```
5. Start the server
    ```
    npm start
    ```

## Usage

This application provides the following endpoints:

- `GET /notes`: Fetch all notes
- `POST /notes`: Create a new note
- `GET /notes/:id`: Fetch a single note by ID
- `PUT /notes/:id`: Update a note by ID
- `DELETE /notes/:id`: Delete a note by ID

## Contributing

Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
