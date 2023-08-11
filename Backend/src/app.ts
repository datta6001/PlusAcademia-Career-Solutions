import express from "express";
const app = express();
const port = 3000;

app.get("/courses", (req, res) => {
  res.send("Hello World...");
});

app.get("/feedbacks", (req, res) => {
  res.send("Got it...");
});

app.listen(port, () => {
  console.log(`Listening on ${port}...`);
});
