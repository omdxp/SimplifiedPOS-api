import { IRouter, Router, Request, Response } from "express";

const router: IRouter = Router();

// add produt route
router.get("/add-product", (req: Request, res: Response) => {
  console.log("Adding a product...");
  res.send("Product has been added!");
});

// delete a product route
router.get("/delete-product", (req: Request, res: Response) => {
  console.log("Deleting a product...");
  res.send("Product has been deleted!");
});

export { router as productRouter };
