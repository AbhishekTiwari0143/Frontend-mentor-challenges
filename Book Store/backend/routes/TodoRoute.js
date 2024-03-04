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

router.get("/", async (request, response) => {
  try {
    const todos = await TodoUser.find({});
    return response.json({
      length: todos.length,
      data: todos,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (request, response) => {
  try {
    const id = request.params.id;

    const todo = await TodoUser.findById(id);

    if (!todo) {
      return response.status(400).json({ message: "todo Not Found" });
    }
    return response.status(200).send(todo);
  } catch (error) {
    console.log(error.message);
    return response.status(404).send({ message: error.message });
  }
});

router.put("/:id", async (request, response) => {
  try {
    if (!request.body.title) {
      return response.status(400).json({ message: "Please Enter Detail!" });
    }
    const id = request.params.id;

    const todo = await TodoUser.findByIdAndUpdate(id, request.body);

    if (!todo) {
      return response.status(400).json({ message: "todo Not Found" });
    }
    return response.status(200).send(todo);
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ message: error.message });
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const id = request.params.id;

    const todo = await TodoUser.findByIdAndDelete(id);

    if (!todo) {
      return response.status(400).json({ message: "todo Not Found" });
    }
    return response.status(200).json({ message: "Deleted" });
  } catch (error) {
    console.log(error.message);
    return response.status(404).send({ message: error.message });
  }
});

export default router;
