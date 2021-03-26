import express, {Application, Request, Response, NextFunction} from 'express';

const app: Application = express(); // initialize express app
const port = 5000; // port to be listened from

const add = (a: number, b: number): number => a + b;

// default route
app.get("/", (req: Request, res: Response, next: NextFunction) => {
    console.log(add(5,10));
    res.send("The API is up and running");
});

// add product route
app.get("/add-product", (req: Request, res: Response, next: NextFunction) => {
    console.log("Adding a product...");
    res.send("Product has been added!")
})

// delete product route
app.get("/delete-product", (req: Request, res: Response, next: NextFunction) => {
    console.log("Deleting a product...");
    res.send("Product has been deleted!")
})

// add transaction route
app.get("/add-transaction", (req: Request, res: Response, next: NextFunction) => {
    console.log("Adding a transaction...");
    res.send("Transaction has been added!")
})

// delete transaction route
app.get("/delete-transaction", (req: Request, res: Response, next: NextFunction) => {
    console.log("Deleting a transaction...");
    res.send("Transaction has been deleted!")
})

app.listen(port, ()=>console.log('Server running'))