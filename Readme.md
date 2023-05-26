# Setup Chat Wars

Setup: 

```
yarn install
```

Run concurrently:

```
yarn dev
```

Run parallel:

```
yarn server
```

Run individually:

```
yarn dev:backend
yarn dev:client
```


## Server
| packages/backend

Backend create with Express and SQL Lite in Memory Database has a simple CRUD to manage the users and the messages.

### Rest API

| Method | Endpoint | Description | Mock |
| ------ | -------- | ----------- | ----- |
| GET | /chat/messages | Get all messages | 5000 messages  |
| GET | /chat/messages/:id | Get a message by id | - |
| POST | /chat/messages | Create a new message | - |
| PUT | /chat/messages/:id | Update a message | - |
| DELETE | /chat/messages/:id | Delete a message | - |



## Client
| packages/client

Frontend create with React (Vite) and React Query to consume the Rest API and show the messages.

Simple chat with a list of messages and a form to create a new message (In Progress).


First Step:

```
cd packages/client
```


Install:
```
yarn install
```

Run:
```
yarn dev
```


