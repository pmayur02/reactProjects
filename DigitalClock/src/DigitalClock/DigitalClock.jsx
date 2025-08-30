import { useEffect,useState } from "react";

function DigitalClock(){
    
  const [time,setTime] = useState(new Date());

  useEffect(()=>{
    const intervalid = setInterval(() => {
        setTime(new Date());
    }, 1000);

    return ()=>{
      clearInterval(intervalid);
    }
  },[])

function formatTime(){
  let hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const meridiem = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  
  return `${zeroPadding(hours)}:${zeroPadding(minutes)}:${zeroPadding(seconds)} ${meridiem}`;
}

function zeroPadding(number){
    return number < 10 ? "0" + number : number;
}

    return(

           
                <div className="clock">
                    <span>{formatTime()}</span>
                </div>
         


    )
}

export default DigitalClock;