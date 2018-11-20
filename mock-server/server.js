const express = require("express"),
  app = express(),
  bodyParser = require("body-parser");

const path = require("path");

app.use(express.static(path.resolve(__dirname, "client", "build")));
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

["payload"].map(endpoint => require(`./endpoints/${endpoint}`)(app));

app.listen(3002, () => console.log(`Server is running on port ${3005}`));
