//chatName
//isGroupChat
//users
//latest message
//group admin

import mongoose, { Schema } from "mongoose";


const chatSchema= new  Schema( {
    // chatName: {
    //     type: String,
    //     trim:true
    // },
    // isGroupChat: {
    //     type: Boolean,
    //     default:false
    // },
    // users:[{
    //     type: Schema.Types.ObjectId,
    //     ref:"User"
    // }],
    // latestMessage:{
    //     type: Schema.Types.ObjectId,
    //     ref:"Message"
    // },
    // groupAdmin :{
    //     type: Schema.Types.ObjectId,
    //     ref:"User"
    // }
    members :{
        type: Array,
        required: true
    }
},
{
    timestamps:true
})

export const Chat= mongoose.model("Chat",chatSchema)