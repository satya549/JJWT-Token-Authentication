const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const secretKey = "secretkey";

app.get("/", (req, res) => {
  res.json({
    message: "JWT Authntication api",
  });
});

app.post("/login", (req, res) => {
  const user = { id: 1, username: "dev", email: "dev@gmail.com" };
  jwt.sign({ user }, secretKey, { expiresIn: "300s" }, (err, token) => {
    res.json({
      token,
    });
  });
});

app.listen(4600, () => {
  console.log("server is running on http://www.localhost:4600");
});
