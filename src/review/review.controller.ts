import { Request, Response } from 'express';
import * as ReviewModel from "./review.model";

export const getAllReview =async (req:Request, res:Response) => {
  try {
    const review = await ReviewModel.getAllReview()
    res.status(200).json(review)
  } catch (err:any) {
    res.status(500).json({ message: err.message });
    console.error(err.message);
    
  }
}

export const getSingleReview =async (req:Request, res:Response) => {
  try {
    const id = parseInt(req.params.id)
    if(!id) {
      res.status(400).json({message: "Invalid Review ID"})
    }
    const user = await ReviewModel.getSingleReview(id)
    if(!user) {
      res.status(400).json({message: "Review not found."})
    }
      
    res.status(200).json(user)
  } catch (err:any) {
    console.log(err.message);
    res.status(500).send(err.message)
  }
}

export const deleteReview =async (req:Request, res:Response) => {
  try {
    const id = parseInt(req.params.id)
    const deleteUser = await ReviewModel.deleteReview(id)  
    if(!deleteUser) {
      res.status(400).json({message:"Review not found"})
    }
    res.status(200).send({message: `Review no. ${id} is now deleted.`})
  } catch (err:any) {
    console.error(err.message);
    res.status(500).json({message: err.message})
  }
}

export const addReview =async (req:Request, res:Response) => {
  try {
    const data = req.body;
    const user = await ReviewModel.addReview(data)
    res.status(200).json(user)
  } catch (err:any) {
    console.error(err.message);
    res.status(500).json({message:err.message})
    
  }
}

export const updateReview =async (req:Request, res:Response) => {
  try {
    
    const data = req.body
    const id = parseInt(req.params.id)
    const review = await ReviewModel.patchReview(id, data);
    if(!review) {
      res.status(400).json({message: "Review not found"})
    } else {
      res. status(200).json(review)
    }
  } catch (err:any) {
    console.error(err.message);
    res.status(500).json({message: err.message}) 
  }
}


