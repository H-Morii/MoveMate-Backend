import { Request, Response } from 'express';
import * as UserModel from "./user.model";

export const getAllUser =async (req:Request, res:Response) => {
  try {
    const user = await UserModel.getUser()
    res.status(200).json(user)
  } catch (err:any) {
    res.status(500).json({ message: err.message });
    console.error(err.message);
    
  }
  
}