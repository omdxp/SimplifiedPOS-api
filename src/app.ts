import express, { Application, Request, Response } from "express";
import mongoose from "mongoose";
import { json } from "body-parser";
import { productRouter } from "./routes/product";
import { transactionRouter } from "./routes/transaction";

const app: Application = express(); // initialize express app
const port: number = 5000; // port to be listened from

app.use(json);

// default route
app.get("/", (req: Request, res: Response) => {
  return res.send("The API is up and running!");
});

// product route
app.use(productRouter);

// transaction route
app.use(transactionRouter);

// connect to mongo database
mongoose.connect(
  "mongodb://localhost:27017/product",
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Connected to database");
  }
);

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
