let env = "local";

let envs = {
  local: {
    hostname: "157.245.209.85",
    port: 3005
  }
};

module.exports = {
  client: {
    hostname: "localhost",
    port: "3005"
  },
  server: envs[env]
};
