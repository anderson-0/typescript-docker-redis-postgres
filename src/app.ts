import "reflect-metadata";
import "dotenv/config";
import cors from "cors";
import express from "express";
import "express-async-errors";
import redis from "redis";


import "./database";

const redisClient = redis.createClient({
  host: process.env.REDIS_HOST || 'redis',
  port: Number(process.env.REDIS_PORT || 6379),
});

import { router } from "./routes";

const app = express();

app.use(express.json());

app.use(cors());
app.use(router);

export { app };
