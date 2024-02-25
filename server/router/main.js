import express from "express";
import userRoute from "./user.js";
const router = express.Router();

router.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Hello, express routes home page",
  });
});

router.get("/about", (req, res) => {
  return res.json({ message: "Hello everyone, you are inabout page" });
});

router.get("/about/:user", (req, res) => {
  return res.json({
    message: `Hello ${req.params.user}, you are in about page`,
  });
});

router.use("/users", userRoute);

export default router;