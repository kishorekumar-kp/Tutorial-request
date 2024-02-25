import express from "express";

const userRoute = express();

userRoute.get("/", (req, res) => {
  const user = ["abi", "bala", "cathy"];
  return res.json({
    user: user,
  });
});

export default userRoute;
