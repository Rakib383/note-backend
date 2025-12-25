import { Note } from "../models/notes.model";
import express, { Request, Response } from "express";

export const notesRoutes = express.Router()

notesRoutes.post("/create-note",async (req:Request,res:Response)=> {

    const body = req.body

    console.log(body);
    const note = await Note.create(body);

    res.status(201).json({
        success:true,
        note
    })
    
}) 

notesRoutes.get("/",async (req:Request,res:Response)=> {

   
    const notes = await Note.find().populate("userId")

    res.status(201).json({
        success:true,
        notes
    })
    
})


notesRoutes.get("/:noteId",async (req:Request,res:Response)=> {

   
    const note = await Note.findById(req.params.noteId)

    res.status(201).json({
        success:true,
        note
    })
    
})

notesRoutes.patch("/:noteId",async (req:Request,res:Response) => {
    const noteId = req.params.noteId
    const updatedBody = req.body;
    const note = await Note.findByIdAndUpdate(noteId,updatedBody);

    res.json({
        success:true,
        message:"note updated"
    })


})