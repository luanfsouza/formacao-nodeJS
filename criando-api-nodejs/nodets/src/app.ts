import express from "express";
import router from "./routes/userRoute";

const createApp = () => {
  const app = express();

  app.use(express.json());
  app.use("/user", router);
  
  return app;
};

export default createApp;
