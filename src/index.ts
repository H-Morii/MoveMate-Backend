import express from "express"
import { PrismaClient } from '@prisma/client';
// import cors from 'cors'
const app = express();

//MVC model import
import * as UserController from './user/user.controller';

// app.use(cors())
const prisma = new PrismaClient();
app.use(express.json());

//User endpoint
app.get('/user', UserController.getAllUser);
app.get('/user/:id', UserController.getSingleUser);
app.post('/user', UserController.addUser);
app.patch('/user/:id', UserController.updateUser);
app.delete('/user/:id',UserController.deleteUser);


app.listen(process.env.PORT || 8080, () => {
  console.log("Server is running on port 8080 :)");
}); 

