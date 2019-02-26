let env = "local";

let envs = {
  local: {
    hostname: "localhost",
    port: 3007
  }
};

module.exports = {
  client: {
    hostname: "localhost",
    port: "3000"
  },
  server: envs[env]
};
