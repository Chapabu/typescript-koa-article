import app from './app/app';
import databaseConnection from './database/database.connection';

const PORT = Number(process.env.PORT) || 3000;

async function startServer() {
  await databaseConnection;
  app.listen(PORT);
}

startServer();
