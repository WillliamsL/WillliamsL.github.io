const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Permet de servir les fichiers statiques
app.use(express.static("public"));

// Endpoint pour obtenir les articles
app.get("/stock", (req, res) => {
  fs.readFile("stock.json", (err, data) => {
    if (err) throw err;
    const stock = JSON.parse(data);
    res.json(stock);
  });
});

// Endpoint pour ajouter un article
app.post("/stock", (req, res) => {
  const newItem = req.body;
  fs.readFile("stock.json", (err, data) => {
    if (err) throw err;
    const stock = JSON.parse(data);
    stock.push(newItem);
    fs.writeFile("stock.json", JSON.stringify(stock, null, 2), (err) => {
      if (err) throw err;
      res.status(201).json(newItem);
    });
  });
});

// Endpoint pour supprimer un article
app.delete("/stock/:item", (req, res) => {
  const itemToDelete = req.params.item;
  fs.readFile("stock.json", (err, data) => {
    if (err) throw err;
    let stock = JSON.parse(data);
    stock = stock.filter((item) => item.item !== itemToDelete);
    fs.writeFile("stock.json", JSON.stringify(stock, null, 2), (err) => {
      if (err) throw err;
      res.status(204).send();
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
