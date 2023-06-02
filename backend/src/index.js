/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import express from "express";
import * as dotenv from "dotenv";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import db from "./config/Database.js";
import usersRouter from "./routes/Users.js";
import articlesRouter from "./routes/Articles.js";
import pricesRouter from "./routes/Prices.js";
import tengkulaksRouter from "./routes/Tengkulaks.js";
import { ArticleImages, Articles } from "./models/ArticlesModel.js";
import Prices from "./models/PricesModel.js";
import Tengkulaks from "./models/TengkulaksModel.js";
import Users from "./models/UsersModel.js";

dotenv.config();

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "./public/index.html");
});

app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  })
);


try {
  await db.authenticate();
  console.log("Database Connected...");
} catch (error) {
  console.log(error);
}



app.use(cookieParser());
// app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(usersRouter);
app.use("/articles", articlesRouter);
app.use("/prices", pricesRouter);
app.use("/tengkulaks", tengkulaksRouter)
  ;

app.listen(5000, () => {
  console.log("Server running at port 5000");
});
