import { createRequire } from "module";
const require = createRequire(import.meta.url);
require("dotenv").config();

export default {
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "osuser",
    password: "online_shop",
    database: "online_shop",
    charset: "utf8",
  },
  
  debug: true,
};
