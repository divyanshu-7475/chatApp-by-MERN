import mongoose, { Schema } from "mongoose";

const verificationSchema= new Schema({
    email:{
        type:String,
        index:true,
        required:true
    },
    code:{
        type:String,
    },
    context:{
        type:String
    }
})

export const Verication= mongoose.model("Verification",verificationSchema)