import express, { Application, Request, Response, NextFunction } from "express";

const app: Application = express(); // initialize express app
const port: number = 5000; // port to be listened from

// default route
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("The API is up and running");
});

// add transaction route
app.get(
  "/add-transaction",
  (req: Request, res: Response, next: NextFunction) => {
    console.log("Adding a transaction...");
    res.send("Transaction has been added!");
  }
);

// delete transaction route
app.get(
  "/delete-transaction",
  (req: Request, res: Response, next: NextFunction) => {
    console.log("Deleting a transaction...");
    res.send("Transaction has been deleted!");
  }
);

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
