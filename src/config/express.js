import express from "express";
import bodyParser from "body-parser";

const app = express();
app.set("port", process.env.APP_PORT || 3000);
app.set("host", process.env.APP_HOST || "localhost");

app.use(bodyParser.json());
app.use(express.static("/backend/public"));

export default app;
