let env = "local";

let envs = {
  local: {
    hostname: "157.245.209.85",
    port: 8080
  }
};

module.exports = {
  client: {
    hostname: "localhost",
    port: "3000"
  },
  server: envs[env]
};
