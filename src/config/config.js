let env = "local";

let envs = {
  local: {
    hostname: "localhost",
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
