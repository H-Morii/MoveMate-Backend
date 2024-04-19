import { Request, Response } from 'express';
import * as UserModel from "./user.model";
import bcrypt from 'bcrypt'
import { error } from 'console';

export const getAllUser = async (req:Request, res:Response) => {
  try {
    const user = await UserModel.getUser()
    res.status(200).json(user)
  } catch (err:any) {
    res.status(500).json({ message: err.message });
    console.error(err.message);
    
  }
}

export const getSingleUser = async (req:Request, res:Response) => {
  try {
    const id = parseInt(req.params.id)
    if(!id) {
      res.status(400).json({message: "Invalid user ID"})
    }
    const user = await UserModel.getSingleUser(id)
    if(!user) {
      res.status(400).json({message: "User not found."})
    }
      
    res.status(200).json(user)
  } catch (err:any) {
    console.log(err.message);
    res.status(500).send(err.message)
  }
}

export const deleteUser = async (req:Request, res:Response) => {
  try {
    const id = parseInt(req.params.id)
    const deleteUser = await UserModel.deleteUser(id)  
    if(!deleteUser) {
      res.status(400).json({message:"User not found"})
    }
    res.status(200).send({message: `user no. ${id} is not deleted.`})
  } catch (err:any) {
    console.error(err.message);
    res.status(500).json({message: err.message})
  }
}

export const addUser = async (req:Request, res:Response) => {
  try {
    const saltRound = 10
    const data = req.body;
    const encryptPasword = await bcrypt.hash(data.passwordHash, saltRound)
    const newUser = {
      ...data,
        passwordHash: encryptPasword,
    }
    const user = await UserModel.addUser(newUser)
    res.status(201).json(user)
  } catch (err:any) {
    console.error(err.message);
    res.status(500).json({message:err.message})
    
  }
}

export const updateUser = async (req:Request, res:Response) => {
  try {
    
    const data = req.body
    const id = parseInt(req.params.id)
    const user = await UserModel.patchUser(id, data);
    if(!user) {
      res.status(400).json({message: "User not found"})
    } else {
      res. status(200).json({message: "User us now updated"})
    }
  } catch (err:any) {
    console.error(err.message);
    res.status(500).json({message: err.message}) 
  }
}

export const loginUser =async (req:Request, res:Response) => {
  try {
    const {email, passwordHash} = req.body
    const user =  await UserModel.loginUser(email)

    const isMatch = await bcrypt.compare(passwordHash, user.passwordHash)
    if(isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    
    res.status(200).json({ message: "Login successful", user });
  } catch (err:any) {
    console.error(err.message);
    
  }
}


