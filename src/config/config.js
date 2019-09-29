let env = "local";

let envs = {
  local: {
    hostname: "157.245.209.85",
    port: 8080
  }
};

module.exports = {
  client: {
    hostname: "157.245.209.85",
    port: "8080"
  },
  server: envs[env]
};
