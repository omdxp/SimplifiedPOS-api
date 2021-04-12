import { IRouter, Router, Request, Response } from "express";

const router: IRouter = Router();

// add transaction route
router.get("/add-transaction", (req: Request, res: Response) => {
  console.log("Adding a transaction...");
  console.log("Transaction has been added!");
});

// delete transaction route
router.get("/delete-transaction", (req: Request, res: Response) => {
  console.log("Deleting a transaction...");
  console.log("Transaction has been deleted!");
});

// refund transaction route
router.get("/refund-transaction", (req: Request, res: Response) => {
  console.log("Refunding a transaction...");
  console.log("Transaction has been refunded!");
});

export { router as transactionRouter };
