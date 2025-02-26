import React,{useEffect, useRef, useState} from 'react'

const VerificationCode=({userDetails})=>{
        const inputRefs = [useRef(), useRef(), useRef(), useRef(),useRef(),useRef()];
        const [otp, setOtp] = useState(["", "", "", "","",""]);      
        const handleChange = (index, e) => {
          const value = e.target.value;
          if (!/^[0-9]?$/.test(value)) return; // Allow only single-digit numbers
      
          const newOtp = [...otp];
          newOtp[index] = value;
          setOtp(newOtp);
          
      
          if (value && index < 5) {
            inputRefs[index + 1].current.focus();
          }
        };
      
        const handleKeyDown = (index, e) => {
            
          if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs[index - 1].current.focus();
          }
        };
        

        const submitClick=()=>{
            let extracode=0
            for (let index = 0; index < otp.length; index++) {
                if(otp[index]===""){
                    console.log("yes")
                    return
                }
                 extracode= extracode + Number(otp[index])*(Math.pow(10,(5-index)))
                
                
                
            }
            console.log(extracode)
        }
            
        
    

  return (
    <div className='w-full h-full flex flex-col items-center justify-center '>
        <div className='w-full flex justify-center'>
            <div className='w-1/2 m-3 text-xl'>Enter code here</div>
        </div>
        <div className='w-full h-3/5'>
        <div className='w-full h-[70%] flex flex-col justify-center items-center '>
        <div className='flex gap-3 w-1/2 h-1/2 border border-b-transparent justify-center items-center rounded-t-xl p-3'>
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={inputRefs[index]}
          type="text"
          maxLength="1"
          value={digit}
          onChange={(e) => handleChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          className='w-[17%] h-10 bg-transparent border rounded-md'
        />
      ))}
        </div>
        <div className='w-full h-1/2 flex justify-center'>
        <div className='w-1/2 h-full border border-t-transparent rounded-b-xl flex justify-center'>
        <div className='w-3/5 h-1/2 border rounded-xl bg-blue-600 text-3xl flex justify-center items-center cursor-pointer'
         onClick={submitClick}>Submit</div>
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export {VerificationCode}
