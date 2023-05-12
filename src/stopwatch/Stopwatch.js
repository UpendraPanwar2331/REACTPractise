import React, { useEffect, useState } from 'react'

const Stopwatch = () => {
    const [Time,setTime] = useState(0);
    const [Running,setRunning] = useState(false);
    // useeffect yaha par sbse aakhri m chlega 
    // phele roh running chechk krega if trye then set interval chalwga
    useEffect(() => {
        let interval;
        if(Running){
            interval = setInterval(() => {
                setTime(Time => Time+1);

            },10);
        }
        return () => clearInterval(interval)
    },[Running]);

    const startFn = () => {
        setRunning(true);
        
    }

    const stopFn = () => {
        setRunning(false);
    }

    const resetFn = () => {
        setTime(0);
        setRunning(false);

    }

  return (
    <div>
        <p>STOPWATCH</p>
        <p>{(Time/100).toFixed(2)}</p>
        <button onClick={startFn}>Start</button>
        <button onClick={stopFn}>Stop</button>
        <button onClick={resetFn}>Reset</button>

      
    </div>
  )
}

export default Stopwatch



