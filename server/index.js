import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";

import connectDB from "./mongodb/connect.js";
import userRouter from "./routes/user.routes.js";
import passwordResetRoutes from "./routes/passwordReset.js";

dotenv.config();

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(cors());

app.get("/", (req, res) => {
  res.send({ message: "Hello World!" });
});

// routes
app.use("/api/v1/users", userRouter);
app.use("/api/password-reset", passwordResetRoutes);

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);

    app.listen(8080, () =>
      console.log("Server started on port http://localhost:8080")
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
