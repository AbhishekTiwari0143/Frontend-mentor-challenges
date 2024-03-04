import express from "express";
import { TodoUser } from "../model/TodoUser.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    if (!req.body.title) {
      return res.status(400).send({ message: "Please enter detail" });
    }

    const newTodo = { title: req.body.title };

    const todo = await TodoUser.create(newTodo);
    return res.status(200).send(todo);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
