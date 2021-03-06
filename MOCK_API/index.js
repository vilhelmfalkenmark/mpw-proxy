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
const currentUser = {
  name: "T-Rex",
  postcode: 12345,
  userId: 666
};

app.get("/number", (req, res) => {
  console.log(req.query);
  res.json({
    myNumber: parseInt(req.query.number) + 10,
    name: "Ville",
    age: 32
  });
});

app.get("/deliveries", (req, res) => {
  console.log(req.headers, " headers i MOCK API");

  res.json({ deliveries });
});

app.get("/delivery", (req, res) => {
  console.log(req.query);
  const delivery = deliveries.find(
    delivery => delivery.id === parseInt(req.query.deliveryId)
  );
  res.json(delivery);
});

app.post("/authentication/phonenumber", (req, res) => {
  console.log("Körs mot /authentication/phonenumber");

  console.log(req.body);
  res.json({ token: "abc123", currentUser });
  // if (req.body.token === 1) {
  //   res.json({ authenticated: true });
  // } else {
  //   res.json({ authenticated: false });
  // }
});

app.get("/user", (req, res) => {
  if (req.headers.jwtoken === "abc123") {
    console.log("Token är giltig");
    res.json(currentUser);
  } else {
    console.log("Token är inte giltig");
    res.sendStatus(403);
  }
});

app.listen(PORT, () => {
  console.log("MOCK API KÖRS PÅ PORT " + PORT);
});
