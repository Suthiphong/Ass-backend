# assignment-backend

## API Docs

- `GET /users/:id` - get user information by user ID

  Example: `GET /users/5c39f8e9d7f40f00a448a97e` - get user information that user ID is equal 5c39f8e9d7f40f00a448a97e

  Response Data

  ```json
  {
    "_id": "5c39f8e9d7f40f00a448a97e",
    "username": "myname",
    "password": "mypassword"
  }
  ```

- `POST /users` - signup new user with username and password

  Body:

  ```json
  {
    "username": String,
    "password": String
  }
  ```

  Example: `POST /users`

  Body

  ```json
  {
    "username": "myname",
    "password": "mypassword"
  }
  ```

- `POST /users/login` - login with username and password
  Body:

  ```json
  {
    "username": String,
    "password": String
  }
  ```

  Example: `POST /users/login`

  Body

  ```json
  {
    "username": "myname",
    "password": "mypassword"
  }
  ```

  Response Data

  ```json
  {
    "_id": "5c39f8e9d7f40f00a448a97e",
    "username": "myname",
    "password": "mypassword"
  }
  ```

- `GET /transactions?user=:user` - get transactions of some user

  Example: `GET /transactions?user=5c39f8e9d7f40f00a448a97e` - get transactions of user that user ID is equal 5c39f8e9d7f40f00a448a97e

  Response Data

  ```json
  [
    {
      "_id": "5c39fb3991d29e00d406d3f1",
      "user": "5c39f8e9d7f40f00a448a97e",
      "amount": 200,
      "type": "expense",
      "remark": "employing cost",
      "date": "2019-01-12T14:35:11.000Z"
    }
  ]
  ```

- `POST /transactions`

  Body:

  ```json
  {
    "user": userID,
    "amount": Number,
    "type": enum["income", "expense"],
    "remark": String,
    "date": Date
  }
  ```

  Example: `POST /transactions` - add new transaction

  Body

  ```json
  {
    "user": "5c39f8e9d7f40f00a448a97e",
    "amount": 100,
    "type": "expense",
    "remark": "employing cost",
    "date": "2019-01-12T21:35:11+07:00"
  }
  ```

- `PUT /transactions/:id` - update transaction by transaction ID

  Body:

  ```json
  {
    "user": userID,
    "amount": Number,
    "type": enum["income", "expense"],
    "remark": String,
    "date": Date
  }
  ```

  Example: `PUT /transactions/5c39fb3991d29e00d406d3f1` - update transaction that transaction ID is equal 5c39fb3991d29e00d406d3f1

  Body

  ```json
  {
    "user": "5c39f8e9d7f40f00a448a97e",
    "amount": 100,
    "type": "expense",
    "remark": "employing cost",
    "date": "2019-01-12T21:35:11+07:00"
  }
  ```

- `DELETE /transactions/:id` - delete transaction by transaction ID

  Example: `PUT /transactions/5c39fb3991d29e00d406d3f1` - delete transaction that transaction ID is equal 5c39fb3991d29e00d406d3f1
