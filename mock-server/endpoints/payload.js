var payload = require("../data/payload.json");

module.exports = app => {
  app.get("/payload", (req, res) => {
    res.send({
      status: "Some status message here",
      payload
    });
  });
};
