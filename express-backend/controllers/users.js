import { v4 as uuid } from "uuid";

let users = [];

export const getUsers = (req, res) => {
  console.log(`Users in the database: ${users}`);

  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuid() });

  console.log(`User ${user.username} added to the database.`);
  res.status(201).send(`User ${user.username} added to the database.`);
};

export const getUser = (req, res) => {
  const user = users.find((user) => user.id === req.params.id);
  if (user) {
    res.send(user);
  } else {
    res.status(404).send("User not found");
  }
};

export const deleteUser = (req, res) => {
  const user = users.find((user) => user.id === req.params.id);

  if (user) {
    users = users.filter((user) => user.id !== req.params.id);
    console.log(`User with id ${req.params.id} has been deleted`);
    res.send(`User with id ${req.params.id} has been deleted`);
  } else {
    res.status(404).send("User not found");
  }
};

export const updateUser = (req, res) => {
  const user = users.find((user) => user.id === req.params.id);

  if (user) {
    user.username = req.body.username || user.username;
    user.age = req.body.age || user.age;
    console.log(
      `Username has been updated to ${user.username}. Age has been updated to ${user.age}`
    );
    res.send(
      `Username has been updated to ${user.username}. Age has been updated to ${user.age}`
    );
  } else {
    res.status(404).send("User not found");
  }
};
