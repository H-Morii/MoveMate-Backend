import express from "express"
import { PrismaClient } from '@prisma/client';

// import cors from 'cors'
import cors, { CorsOptions } from 'cors';
import dotenv from 'dotenv';

const app = express();
dotenv.config();


//MVC model import
import * as UserController from './user/user.controller';
import * as DriverController from './driverProfile/driverProfile.controller';
import * as ReviewController from './review/review.controller'

// app.use(cors())
const prisma = new PrismaClient();
app.use(express.json());

//cors
const corsOptions: CorsOptions = {

  origin: 'http://localhost:5173', 

  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());


//User endpoint
app.get('/user', UserController.getAllUser);
app.get('/user/:id', UserController.getSingleUser);
app.post('/user', UserController.addUser);
app.patch('/user/:id', UserController.updateUser);
app.delete('/user/:id',UserController.deleteUser);

//Driver endpoint
app.get('/driver', DriverController.getAllDriver);
app.get('/driver/:id', DriverController.getDriver);
app.post('/driver', DriverController.addDriver);
app.patch('/driver/:id', DriverController.updateDriver);
app.delete('/driver/:id',DriverController.deleteDriver);

//Review endpoint
app.get('/review', ReviewController.getAllReview);
app.get('/review/:id', ReviewController.getSingleReview);
app.post('/review', ReviewController.addReview);
app.patch('/review/:id', ReviewController.updateReview);
app.delete('/review/:id',ReviewController.deleteReview);


app.listen(process.env.PORT || 8080, () => {
  console.log("Server is running on port 8080 :)");
}); 

