// const express = require("express"),
//   app = express(),
//   bodyParser = require("body-parser");

// app.use(bodyParser.json());

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// ["payload"].map(endpoint => require(`./endpoints/${endpoint}`)(app));

// app.listen(8080, () => console.log(`Server is running on port ${8080}`));

const express = require("express"),
  app = express(),
  bodyParser = require("body-parser");

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

app.listen(8080, () => console.log(`Server is running on port ${8080}`));