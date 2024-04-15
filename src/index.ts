import express from "express"
import { PrismaClient } from '@prisma/client';
// import cors from 'cors'
const app = express();

//MVC model import
import * as EmployeeController from './user/user.controller';

// app.use(cors())
const prisma = new PrismaClient();
app.use(express.json());

app.get('user', EmployeeController.getAllUser);

app.listen(process.env.PORT || 8080, () => {
  console.log("Server is running on port 8080 :)");
}); 