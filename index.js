const express = require("express");
const app = express();
const Remocon = require("rcjs");
const remocon = new Remocon();
const request = require("request");

let clients = {}

app.get("/register/:id", (req, res) => {
  const remoteAddress = req.ip;
  const splittedAddress = remoteAddress.split(":");
  const ipAddress = splittedAddress[splittedAddress.length - 1];
  const id = req.params.id
  clients[id] = ipAddress;
  remocon.addButton(id, function() {
    const options = {
      url: "http://" + ipAddress + ":3002",
      method: "GET"
    }
    request(options, function(err, response, body) {
      console.log(response);
      console.log(err);
    });
  });
  res.send({ message: "OK" });
});

app.listen(3000);
remocon.start(3001);
