import express, { Application, Request, Response } from "express";
import cors from "cors";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import { BaseRouter } from "./app/routes";

const app: Application = express();

//Parsers
app.use(cors());
app.use(express.json());

// Route
app.use(BaseRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Easy mart server running!");
});

//Global error handler
app.use(globalErrorHandler);

export default app;
