import express from "express";
import rootRouter from "./router/main.js";

const server = express();
const port = 8000;

server.use(rootRouter);

rootRouter.get("*", (req, res) => {
  return res.json({
    success: false,
    message: "Empty here! Go and get a life!",
  });
});

server.listen(port, () => {
  console.log(`Server is running on: http://localhost:${port}`);
});