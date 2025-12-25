import { model, Schema } from "mongoose"
import { INotes } from "../interfaces/notes.interface"

const noteSchema = new Schema<INotes>({
    title:{type:String,required:true,trim:true},
    content:{type:String,default:''},
    category:{
        type:String,
        enum:["personal","work"],
        default:'personal'
    },
    pinned : {
        type:Boolean,
        default:false
    },
    userId: {type:Schema.Types.ObjectId,
        ref:"user"

    }
    
},{versionKey:false,timestamps:true}) 

export const Note = model("Note",noteSchema)