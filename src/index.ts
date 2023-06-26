import express, { Request, Response } from 'express';
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Route handler for the root endpoint
app.get("/", (req: Request, res: Response) => {
    return res.status (200).send({
    response: "Express TypeScript"
    });
    })

// Start the server
app.listen (process.env.APP_PORT, () => {
    console.log((`${process.env.APP_NAME} running on port ${process.env.APP_PORT}`))
    });
