import { ConnectionOptions } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

const env = process.env.NODE_ENV || "development";

const dir = env === "development" ? "src" : "dist";
const ext = env === "development" ? "ts" : "js";


// Dynamic root folder for typeorm files dependending if we are doing local development or in production server
const typeORMConfig: ConnectionOptions = {
  name: "default",
  type: "postgres",
  host: "database",
  database: "postgres",
  port: 5432,
  username: "postgres",
  password: "postgres",
  entities: [
    `./${dir}/migrations/*.${ext}`,
    `./${dir}/entities/*.${ext}`,
  ],
  migrations: [`./${dir}/database/migrations/*.${ext}`],
  cli: {
    migrationsDir: `./${dir}/database/migrations/`,
  },
};

export { typeORMConfig };
