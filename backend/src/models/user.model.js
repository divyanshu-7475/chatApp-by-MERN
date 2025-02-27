import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userScema= new Schema(
    {
        username: {
            type:String,
            required: true,
            unique:true,
            lowercase:true,
            trim:true,
            index:true
        },
        fullname: {
            type:String,
            required: true,
            index:true,
            trim:true
        },
        email: {
            type:String,
            required: true,
            unique:true,
            lowercase:true,
            trim:true, 
        },
        dp: {
            type:String,
            default: "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg"
        },
        password :{
            type : String,
            required:[true, "password is required"]
        },
        refreshToken: {
            type : String
        }
    },
    {
        timestamps: true
    }
)

userScema.pre("save",async function (next) {
    if(!this.isModified("password")) return next()
    this.password =await bcrypt.hash(this.password,10)
    next()
})

userScema.methods.isPasswordCorrect= async function (password) {
    
    
    return await bcrypt.compare(password,this.password)
}

userScema.methods.generateAccessToken= function () {
    return jwt.sign(
        {
            _id:this._id,
            email:this.email,
            username:this.username
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userScema.methods.generateRefreshToken= function () {
    return jwt.sign(
        {
            _id:this._id,
            email:this.email,
            username:this.username
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    ) 
    
}

export const User= mongoose.model("User",userScema)