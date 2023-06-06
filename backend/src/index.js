import express from "express";
import * as dotenv from "dotenv";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import cors from "cors";
import db from "./config/Database.js";
import usersRouter from "./routes/Users.js";
import articlesRouter from "./routes/Articles.js";
import pricesRouter from "./routes/Prices.js";
import tengkulaksRouter from "./routes/Tengkulaks.js";

dotenv.config();
const app = express();

// Set up allow origin
const whitelist = ["http://localhost:3000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  })
);

async function startServer() {
  try {
    await db.authenticate();
    console.log("Database Connected...");
  } catch (error) {
    console.log(error);
  }

  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(usersRouter);
  app.use("/articles", articlesRouter);
  app.use("/prices", pricesRouter);
  app.use("/tengkulaks", tengkulaksRouter);

  app.listen(5000, () => {
    console.log("Server running at port 5000");
  });
}

startServer();
