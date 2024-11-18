# User Management API

This is a simple User Management API built with **Express.js**. It allows you to perform basic CRUD (Create, Read, Update, Delete) operations on a list of users.

---

## How to Run

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the server using `npm start`.
4. Use Postman or any other API client to test the endpoints.

## Endpoints

### 1. Get All Users

- **URL:** `/`
- **Method:** `GET`
- **Description:** Retrieves a list of all users.
- **Response:**
  ```json
  [
    {
      "username": "JohnDoe",
      "age": 30,
      "id": "unique-uuid-1"
    },
    {
      "username": "JaneDoe",
      "age": 25,
      "id": "unique-uuid-2"
    }
  ]
  ```

---

### 2. Create a New User

- **URL:** `/create/`
- **Method:** `POST`
- **Description:** Creates a new user.
- **Request Body:**
  ```json
  {
    "username": "NewUser",
    "age": 22
  }
  ```
- **Response:**
  ```json
  {
    "message": "User [NewUser] added to the database."
  }
  ```

---

### 3. Get a User by ID

- **URL:** `/get/:id`
- **Method:** `GET`
- **Description:** Retrieves a user by their ID.
- **Response:**
  ```json
  {
    "username": "JohnDoe",
    "age": 30,
    "id": "unique-uuid-1"
  }
  ```

---

### 4. Delete a User by ID

- **URL:** `/delete/:id`
- **Method:** `DELETE`
- **Description:** Deletes a user by their ID.
- **Response:**
  ```json
  {
    "message": "User with id unique-uuid-1 has been deleted."
  }
  ```

---

### 5. Update a User by ID

- **URL:** `/update/:id`
- **Method:** `PATCH`
- **Description:** Updates a user's information by their ID.
- **Request Body:**
  ```json
  {
    "username": "UpdatedUser",
    "age": 28
  }
  ```
- **Response:**
  ```json
  {
    "message": "Username has been updated to UpdatedUser. Age has been updated to 28."
  }
  ```

---

## Sample Data

Here is some sample data you can use to test the API:

```json
[
  {
    "username": "JohnDoe",
    "age": 30,
    "id": "unique-uuid-1"
  },
  {
    "username": "JaneDoe",
    "age": 25,
    "id": "unique-uuid-2"
  },
  {
    "username": "AliceSmith",
    "age": 27,
    "id": "unique-uuid-3"
  }
]
```
