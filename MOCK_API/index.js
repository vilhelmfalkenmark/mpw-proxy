const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = 8888;

const deliveries = [
  {
    id: 1,
    date: "10/09/2018",
    postCode: 12120
  },
  {
    id: 2,
    date: "12/09/2018",
    postCode: 12000
  }
];

app.get("/number", (req, res) => {
  console.log(req.query);
  res.json({
    myNumber: parseInt(req.query.number) + 10,
    name: "Ville",
    age: 32
  });
});

app.get("/deliveries", (req, res) => {
  res.json({ deliveries });
});

app.get("/delivery", (req, res) => {
  console.log(req.query);
  const delivery = deliveries.find(
    delivery => delivery.id === parseInt(req.query.deliveryId)
  );
  res.json(delivery);
});

app.post("/authentication", (req, res) => {
  if (req.body.token === 1) {
    res.json({ authenticated: true });
  } else {
    res.json({ authenticated: false });
  }
});

app.get("/user", (req, res) => {
  if (req.query.token === "hello") {
    res.json({
      name: "thierry",
      postcode: 00000
    });
  }
  res.send(404);
});

app.listen(PORT);
