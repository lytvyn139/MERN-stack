const express = require("express");
const cors = require("cors");
const port = 8000;
const app = express();

app.use(cors());

//  /api/test
app.get("/api/test", (req, res) => {
  res.json({
    message: "ok",
    size: 2,
  });
});

app.listen(port, () => {
  console.log(`listeing on port ${port}`);
});
