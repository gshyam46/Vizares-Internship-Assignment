import express from "express";

import {
  getUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers);

router.post("/create/", createUser);

router.get("/get/:id", getUser);

router.delete("/delete/:id", deleteUser);

router.patch("/update/:id", updateUser);

export default router;
