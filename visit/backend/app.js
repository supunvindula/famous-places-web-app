const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var Client = require("node-rest-client").Client;

const APIKEY = "AIzaSyDCAZbxIKK4yacDEYZVPFcRpi-QrbLJh04";
var client = new Client();
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post("/getLocations", (req, res) => {
  const typedWord = req.body.city;
  client.get(
    "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" +
      typedWord +
      "top+sights+&key=" +
      APIKEY,
    function (data, response) {
      // parsed response body as js object
      res.json({ msg: true, data: data });
      // raw response
      //console.log(response);
    }
  );
});

app.listen(3001, () => {
  console.log("listening to port 3001");
});
