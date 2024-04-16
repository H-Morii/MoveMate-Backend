import { Request, Response } from 'express';
import * as DriverModel from "./driverProfile.model"

export const getAllDriver = async (req:Request, res:Response) => {
  try {
    const driver = await DriverModel.getDriver()
    res.status(200).json(driver)
  } catch (err:any) {
    res.status(500).json({ message: err.message });
    console.error(err.message);
    
  }
}

export const getDriver = async (req:Request, res:Response) => {
  try {
    const id = parseInt(req.params.id)
    if(isNaN(id)) {
      res.status(400).json({message: "Invalid driver ID"})
    }
    const driver = await DriverModel.getSingleDriver(id)
    if(!driver) {
      res.status(404).json({message: "driver not found."})
    } else {
      res.status(200).json(driver)
    }
  } catch (err:any) {
    console.log(err.message);
    res.status(500).send(err.message)
  }
}

export const deleteDriver = async (req:Request, res:Response) => {
  try {
    const id = parseInt(req.params.id)
    const deleteDriver = await DriverModel.deleteDriver(id)  
    if (isNaN(id)) {
      return res.status(400).json({message: "Invalid Driver"})
    }
    if(!deleteDriver) {
      res.status(404).json({message:"Driver not found"})
    }
      res.status(200).send({message: `Driver no. ${id} is not deleted.`})
  } catch (err:any) {
    console.error(err.message);
    res.status(500).json({message: err.message})
  }
}

export const addDriver = async (req:Request, res:Response) => {
  try {
    const data = req.body;
    const Driver = await DriverModel.addDriver(data)
    res.status(200).json(Driver)
  } catch (err:any) {
    console.error(err.message);
    res.status(500).json({message:err.message})
    
  }
}

export const updateDriver =async (req:Request, res:Response) => {
  try {
    const data = req.body
    const id = parseInt(req.params.id)
    const driver = await DriverModel.patchDriver(id, data);
    if(isNaN(id)) {
      res.status(400).json({message: "Invalid driver"})
    }
    if(!driver) {
      res.status(400).json({message: "User not found"})
    } 
      res. status(200).json({message: "User us now updated"})
  } catch (err:any) {
    console.error(err.message);
    res.status(500).json({message: err.message}) 
  }
}


