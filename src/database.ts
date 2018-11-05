import 'reflect-metadata';
import { createConnection, Connection, ConnectionOptions } from 'typeorm';

const connectionOpts: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'typescript-koa',
  entities: [
    // Both are required here as we're working with ts-node, and we want the
    // compiled TS to continue working.
    `${__dirname}/entities/*.entity.js`,
    `${__dirname}/entities/*.entity.ts`,
  ],
  synchronize: true,
};

const connection:Promise<Connection> = createConnection(connectionOpts);

export default connection;
