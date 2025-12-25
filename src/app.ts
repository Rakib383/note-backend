import express from 'express';
import type {Application, Request, Response}  from 'express';
import { model, Schema } from 'mongoose';
import { notesRoutes } from './app/controllers/notes.controllers';
import { userRoutes } from './app/controllers/user.controller';


const app:Application = express();
app.use(express.json());

app.use("/notes",notesRoutes)
app.use("/users",userRoutes)



app.get("/",(req:Request,res:Response)=> {

    res.send('welcome to note app')
    
}) 


export default app;