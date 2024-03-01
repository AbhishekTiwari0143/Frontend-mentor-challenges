import { PORT, MongoURI } from "./config.js";
import express from "express";
import mongoose from "mongoose";
import bookRoute from "./routes/bookRoute.js";
import cors from "cors";

const app = express();

//Middleware for parsing request body
app.use(express.json());

//Middleware for handling CORS POLICY
app.use(cors());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome To Mern");
});
app.get("/home", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome To Mern home");
});

app.use("/books", bookRoute);

mongoose
  .connect(MongoURI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App is listening`);
    });
    console.log("App is Connected");
  })
  .catch((e) => {
    console.log(e);
  });
