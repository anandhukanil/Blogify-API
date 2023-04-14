import express from "express";
import errorHandler from "./common/errorHandler";
import router from "./routes";
import { config } from "dotenv";

config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Application routing
app.use(router);
// Error Handler
app.use(errorHandler);

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`));

export default app;