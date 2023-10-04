import express from "express";
import fs from "fs";

let obj = [];

fs.readFile("data.json", "utf8", function (err, data) {
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
  fs.writeFile("data.json", JSON.stringify(newData), (err) => {
    if (err) throw error;
    console.log("done writting");
  });
  fs.readFile("data.json", "utf8", function (err, data) {
    if (err) {
      (err) => console.log(err);
    }
    // Display the file content
    console.log(data);
    obj = JSON.parse(data);
  });
  res.json(obj);
});

app.listen(5000, () => {
  console.log("http://localhost:5000");
});
