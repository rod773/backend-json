import express from "express";
import "dotenv/config";
import fs from "fs";

let obj = [];

fs.readFile("./database/data.json", "utf8", function (err, data) {
  // Display the file content
  console.log(data);
  obj = JSON.parse(data);
});

const app = express();

app.get("/", (req, res) => {
  res.json(obj);
});

const newData = [
  {
    id: 1,
    title: "bird",
  },
  {
    id: 2,
    title: "eagle",
  },
];

app.get("/products", (req, res) => {
  fs.writeFile("./database/data.json", JSON.stringify(newData), (err) => {
    if (err) throw error;
    console.log("done writting");
  });
  fs.readFile("./database/data.json", "utf8", function (err, data) {
    if (err) {
      (err) => console.log(err);
    }
    // Display the file content
    console.log(data);
    obj = JSON.parse(data);
  });
  res.json(obj);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
