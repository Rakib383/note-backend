import express, { Request, Response } from "express";
import { User } from "../models/user.model";
import z, { success } from "zod";
import bcrypt from "bcryptjs"

export const userRoutes = express.Router()

const createUserZodSchema = z.object({
    firstName: z.string(),
    lastName:z.string(),
    email:z.string(),
    password:z.string(),
    role:z.enum(["user","admin"]).default("user")

})

userRoutes.post("/create-user",async (req:Request,res:Response)=> {

    // const body = await createUserZodSchema.parseAsync(req.body);

    const password = await User.hashPassword(req.body.password);

    req.body.password = password

    const user = await User.create(req.body);

    

    // const user = new User(req.body);
    // const password = await user.hashPassword(req.body.password)
    // await user.save();

    res.status(201).json({
        success:true,
        user
    })
    
}) 


userRoutes.get("/",async (req:Request,res:Response)=> {

   
    const users = await User.find()

    res.status(201).json({
        success:true,
        users
    })
    
})


userRoutes.get("/:userId",async (req:Request,res:Response)=> {

   
    const user = await User.findById(req.params.userId)

    res.status(201).json({
        success:true,
       user
    })
    
})

userRoutes.patch("/:userId",async (req:Request,res:Response) => {
    const UserId = req.params.userId
    const updatedBody = req.body;
    const user = await User.findByIdAndUpdate(UserId,updatedBody);

    res.json({
        success:true,
        message:"User updated"
    })


})

userRoutes.delete("/:userId",async (req:Request,res:Response) => {

    const userId = req.params.userId
    const user  = await User.findOneAndDelete({_id:userId})

    res.status(201).json({
        success:true,
        message:"user deleted",
        user
    })
})

