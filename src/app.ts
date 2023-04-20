import express, { Express } from "express";
import path from "path";
import errorHandler from "./common/errorHandler";
import router from "./routes";
import { config } from "dotenv";
import dbInitializer from "./common/dbInitializer";

config();
// Initialize mongodb database
dbInitializer();

const port = process.env.PORT;

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Application routing
app.use(router);
// Error Handler
app.use(errorHandler);

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`));

export default app;