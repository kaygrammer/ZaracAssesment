import express from "express";
const app = express();
import userRoutes from "../ZaracAssesment/resources/user/routes/routes.js";
import morgan from "morgan";
import cors from "cors";

app.use(cors());

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to Zarac 💵💵💵 ");
});

app.use("/api/v1/user", userRoutes);

export default app;
