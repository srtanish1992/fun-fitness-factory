let env = "local";

let envs = {
  local: {
    hostname: "134.209.112.182",
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
