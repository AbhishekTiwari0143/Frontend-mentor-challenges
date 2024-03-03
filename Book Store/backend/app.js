import "dotenv/config";

import express from "express";
import mongoose from "mongoose";
import bookRoute from "./routes/bookRoute.js";
import cors from "cors";
import sellingRoute from "./routes/sellingRoute.js";
import bugCureUserRoute from './routes/bugCureUserRoute.js'

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
app.use("/app", sellingRoute);
app.use('/bugcure', bugCureUserRoute);

const PORT = process.env.PORT || 5555;

mongoose
  .connect(process.env.MongoURI)
  .then(() => {
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`App is listening at port: ${process.env.PORT}`);
    });
    console.log("App is Connected");
  })
  .catch((e) => {
    console.log(e);
  });
