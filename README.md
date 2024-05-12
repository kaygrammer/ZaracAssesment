# Task

You are tasked with creating a RESTful API for managing a collection of user profiles.

## Features

The API should include endpoints for the following operations:

1. Create a new user profile.

2. Retrieve a list of user profiles.

3. Retrieve a single user by email, username or ID.

4. Update an existing user profile.

5. Delete a user by ID, email or username.

The user profile has the following fields: username, first_name, last_name, phone_number, and address.

## Technologies Used

- Node.js

- Express.js

- JavaScript

- MongoDB

## Installation

To install and run App locally, follow these steps:

1. Clone the repository:

```
git clone https://github.com/kaygrammer/ZaracAssesment.git
```

2. Install dependencies:

```
cd ZaracAssesment
npm install
```

3. Add a .env file with the database connection URI. You can do this by creating a file named .env in the root directory of the project and adding the following line

```
MONGO_URI = mongodb+srv://kaygrammer:smVsw7cSuePztRA@nodeexpressprojects.leqxzxo.mongodb.net/trackbudi?retryWrites=true&w=majority
```

4. Start the application:

```
npm run dev
```

5. Open your web browser and navigate to `http://localhost:4000` to access the app root.


```
Make sure to replace `your-mongodb-connection-uri` with the actual connection URI of your MongoDB database. This will ensure that users can easily set up and run the application locally.
```