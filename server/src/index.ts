
import { prisma } from '../prisma';
import app from './app';
require('dotenv').config();

const port = process.env.PORT || 5000;


app.listen(process.env.PORT, () => {
  console.log(`Listening: http://localhost:${port}`);
  prisma.$connect()
    .then(() => console.log("Connected to MongoDB via prisma"))
    .catch((error) => console.error("Error connecting to MongoDB:", error));
});
