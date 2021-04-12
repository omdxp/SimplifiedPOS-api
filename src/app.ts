import express, { Application, Request, Response, NextFunction } from "express";
import { json } from "body-parser";
import { productRouter } from "./routes/product";
import { transactionRouter } from "./routes/transaction";

const app: Application = express(); // initialize express app
const port: number = 5000; // port to be listened from

app.use(json);

// default route
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("The API is up and running");
});

// product route
app.use(productRouter);

// transaction route
app.use(transactionRouter);

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
