/**
 * @fileoverview Express Application Setup
 * @author afridek-software
 * @version 1.0.0-alpha.1
 * @since 2023-09-01
 */

import bodyParser from "body-parser";
import compression from "compression";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";

dotenv.config();

const app = express();

app.use(express.json());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(compression());

export { app };
