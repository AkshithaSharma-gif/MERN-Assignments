//OTP countdown simulator
console.log("OTP sent successfully")
    let seconds=10
   let intervalId=setInterval(()=>{
        console.log(seconds--);
        if(seconds==0){
            console.log("Resend OTP")
            clearInterval(intervalId)
        }
    },1000)

