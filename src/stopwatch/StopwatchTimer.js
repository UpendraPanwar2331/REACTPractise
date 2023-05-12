// import React, { useEffect, useState } from 'react'

// const StopwatchTimer = () => {
//     const [time,settime] = useState(300);
//     const [Running,setRunning] = useState(false);


//     useEffect(() => {
//         let interval;
//         if(Running){
//             interval = setInterval(() => {
//                 settime(time => time-1)
//             },1000)
//         }
//         return () => clearInterval(interval);
//     },[Running])

//     const startFn = () => {
//         setRunning(true);

//     }
//     const stopFn = () => {
//         setRunning(false);
        
//     }
//     const resetFn = () => {
//         settime(0);
//         setRunning(false);
        
//     }



//   return (
//     <div>
//            <p>{(time/1).toFixed(2)}</p>
//         <button onClick={startFn}>Start</button>
//         <button onClick={stopFn}>Stop</button>
//         <button onClick={resetFn}>Reset</button>
      
//     </div>
//   )
// }

// export default StopwatchTimer

import React, { useEffect, useState } from 'react'

const StopwatchTimer = () => {
    const [time, setTime] = useState(300);
    const [running, setRunning] = useState(false);
    const [inputTime, setInputTime] = useState('');

    useEffect(() => {
        let interval;
        if(running && time>0){
            interval = setInterval(() => {
                setTime(time => time - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [running,time]);

    const startFn = () => {
        setRunning(true);
    };

    const stopFn = () => {
        setRunning(false);
    };
    
    const resetFn = () => {
        setTime(0);
        setRunning(false);
    };

    const setTimeFn = () => {
        const newTime = parseInt(inputTime);
        setTime(newTime);
        setInputTime('');
        setRunning(false);
    }

    return (
        <div>
            <p>{time}</p>
            <button onClick={startFn}>Start</button>
            <button onClick={stopFn}>Stop</button>
            <button onClick={resetFn}>Reset</button>
            <input
                type="text"
                value={inputTime}
                onChange={(e) => setInputTime(e.target.value)}
                placeholder="Enter time in seconds"
            />
            <button onClick={setTimeFn}>Set Time</button>
        </div>
    )
}

export default StopwatchTimer;

