import { Model, model, Schema } from "mongoose";
import { IUser,IAddress, UserInstanceMethods, UserStaticMethods } from "../interfaces/user.interface";
import validator from "validator";
import bcrypt from "bcryptjs";
import { Note } from "./notes.model";

 
const addressSchema = new Schema <IAddress>({
      city:{type:String},
        street:{type:String},
        zip:{type:Number}
},{
    _id:false
})

 const userSchema = new Schema<IUser,UserStaticMethods,UserInstanceMethods>({

    firstName:{
        type:String,
        required:true,
        trim:true
    },
     lastName:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String
    },
    role:{
        type:String,
        enum: {values:['user','admin'],message:"you are wrong"},
        default:"user"
    },
    address:{
      type:addressSchema
    }


 },{
    versionKey:false,
    timestamps:true,
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
 })

 userSchema.virtual('fullname').get(function () {
    return `${this.firstName} ${this.lastName}`
 })

 userSchema.method("hashPassword", async function (plainPassword:string){

    const password = await bcrypt.hash(plainPassword,10)

    return password

 })


  userSchema.static("hashPassword", async function (plainPassword:string){

    const password = await bcrypt.hash(plainPassword,10)

    return password

 })

 userSchema.pre('save',async function () {
    this.password = await bcrypt.hash(this.password,10)
 })


 userSchema.post("findOneAndDelete",async function (doc) {
    console.log(doc);
    await Note.deleteMany({userId:doc._id})
 })

 export const User = model<IUser,UserStaticMethods>("user",userSchema)

