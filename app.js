const express = require("express");
const fs = require("fs");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  const data = fs.readFileSync("colors.json");
  const parsedData = JSON.parse(data);

  res.json({
    colors: parsedData.colors,
  });
});

app.listen(port, () => console.log(`App working on port ${port}`));
