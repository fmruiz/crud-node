import express from "express";

// initialize server
const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

// connect server
const PORT = 4000;
app.listen(4000, () => {
  console.log(`Server on port ${PORT}`);
});
