import "dotenv/config";
import { Dialect } from "sequelize";

type DatabaseConfig = {
  username: string;
  password: string;
  database: string;
  host: string;
  dialect: Dialect;
  port: number;
};

const config: { [key: string]: DatabaseConfig } = {
  development: {
    username: process.env.DATABASE_USER!,
    password: process.env.DATABASE_PASSWORD!,
    database: process.env.DATABASE_DB!,
    host: process.env.DATABASE_HOST!,
    dialect: process.env.DATABASE_DIALECT!,
    port: Number(process.env.DATABASE_PORT)!
  }
};

export default config;
