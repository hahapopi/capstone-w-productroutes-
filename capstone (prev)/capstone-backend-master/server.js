// initializing server using express
const express = require("express");
const server = express();

// configuration for body-parser to handle post requests
// no need to install a seperate package - its built in
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

// importing custom routes from routes folder (add all routes here)
const ProductRoutes = require("./routes/ProductRoutes.js");
const UserRoutes = require("./routes/UserRoutes.js");

// declaring and configuring mongoose
const mongoose = require("mongoose");
const dbURL = "";
const dbConfig = { useNewUrlParser: true, useUnifiedTopology: true };

// connecting to mongoose DB
mongoose
  .connect(dbURL, dbConfig)
  .then(() => console.log("Successfully Connected to DB!"))
  .catch((err) => console.log(err));

// adding an index / landing page route to server
server.get("/", function (req, res) {
  res.send("<h1>You have successfully landed on the Dubai Marketplace!</h1>");
});

// using the routes we created from routes folder
server.use("/product", ProductRoutes);
server.use("/user", UserRoutes);

// this is for testing that post requests are made successfully..
// Should be deleted once all routes and testing completed
server.post("/name", function (req, res) {
  const userDetails = {
    name: req.body.name,
    age: req.body.age,
  };
  res.send(
    `Welcome to the User page\n Your details are as follow\n name:${userDetails.name} and age: ${userDetails.age}`
  );
});

// server is listening to requests on port 3000
server.listen(3011, function () {
  console.log("Server is running and listening on port 3000");
});
