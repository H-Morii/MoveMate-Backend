import express from "express"
import { PrismaClient } from '@prisma/client';
// import cors from 'cors'
const app = express();

// app.use(cors())
const prisma = new PrismaClient();
app.use(express.json());

app.listen(8080, () => {
  console.log("Server is running on port 8080 :)");
}); 