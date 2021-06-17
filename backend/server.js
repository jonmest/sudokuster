import express from "express";
import router from "./routes/index.js";
import cors from "cors";

const port = process.env.PORT || 3000;

const main = () => {
	const app = express();

	// Middleware
	app.use(cors());
	app.use(express.json());

	// Routes
	app.use(router);

	app.listen(port, () => {
		console.log(`Server running at port: ${port}`);
	});
};

main();
