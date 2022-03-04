import { Connection, createConnection } from "typeorm";
import { typeORMConfig } from "../config/connection";

export default async (): Promise<Connection> => {
  return createConnection(typeORMConfig);
};
