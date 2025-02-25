import { useState } from "react"

function Register() {
    const [userName,setUserName]=useState("")
    const [fullName,setFullName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")


    return (
        <>
        <div className="w-full h-[65vh] flex justify-center">
        <div className="w-[90%] h-full border mt-2.5 rounded-xl flex flex-col items-center bg-[rgb(188,222,240)]" >
            <div  className="w-[70%] h-4/5 flex  flex-col justify-between mt-1">
                <div className=" w-full h-1/5  flex flex-col">
                <span className="mb-1 text-lg text-gray-700 opacity-90">Username</span>
                <input type="text" className="w-full h-3/5 bg-slate-200 rounded-lg text-black text-lg" />
                </div>
                <div className=" w-full h-1/5  flex flex-col">
                <span className="mb-1 text-lg text-gray-700 opacity-90">Fullname</span>
                <input type="text" className="w-full h-3/5 bg-slate-200 rounded-lg text-black text-lg" />
                </div>
                <div className=" w-full h-1/5  flex flex-col">
                <span className="mb-1 text-lg text-gray-700 opacity-90">Email</span>
                <input type="text" className="w-full h-3/5 bg-slate-200 rounded-lg text-black text-lg" />
                </div>
                <div className=" w-full h-1/5  flex flex-col">
                <span className="mb-1 text-lg text-gray-700 opacity-90">Password</span>
                <input type="text" className="w-full h-3/5 bg-slate-200 rounded-lg text-black text-lg" />
                </div>
            </div>
            <div className="w-full h-[17%]  mt-1 flex justify-center items-center">
                <div className="w-[30%] h-3/5 border bg-red-600 rounded-2xl text-2xl
                 flex justify-center items-center cursor-pointer">Register</div>
            </div>
        </div>
        </div>
        </>
    )
}
export {Register}