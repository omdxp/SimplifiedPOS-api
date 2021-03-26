import express, {Application, Request, Response, NextFunction} from 'express';

const app: Application = express(); // initialize express app
const port = 5000; // port to be listened from

const add = (a: number, b: number): number => a + b;

// default route
app.get('/', (req: Request, res: Response, next: NextFunction) => {
    console.log(add(5,10));
    res.send("The API is up and running");
});

app.listen(port, ()=>console.log('Server running'))