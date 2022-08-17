import express, { Request, Response } from "express";

const app = express();
const port: number | string = process.env.PORT || 1337;

let str = "hello world";

app.get("/", (req: Request, res: Response) => {
	let name = req.query.name || "World";

	res.send(`Hello ${name}!`);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
