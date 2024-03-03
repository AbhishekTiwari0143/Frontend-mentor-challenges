import express from "express";

import { User } from "../model/User-model.js";

const router = express.Router();

router.post("/", async (request, res) => {
  try {
    if (!request.body.userName || !request.body.email || !request.body.number) {
      return res.status(400).send({
        message: "Please Fill Full Details",
      });
    }
    const newUser = {
      userName: request.body.userName,
      email: request.body.email,
      number: request.body.number,
    };

    const user = await User.create(newUser);
    return res.status(200).send(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
