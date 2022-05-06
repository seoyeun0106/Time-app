import React,{useState} from 'react';
import useInterval from './useInterval';
import './App.scss';
import writeTime from './time.js';

function Stopwatch(){
    const [switchh,setSwitch]=useState(false);
    const [Flipform,setFlip]=useState(true);
    let startStop;
    if(switchh==false||Flipform==true){startStop='start'}
    else {startStop='stop'};
    const [startTime,setStart]=useState(0);
    useInterval(()=>{startTime==0?setSwitch(false):setStart(startTime-1)},switchh?10:null);
    return(
        <div className='content'>
        {Flipform?
          <FORM setFlip={setFlip} setStart={setStart}></FORM>        
        : writeTime(startTime)
        }
        <div className='buttons'>
        <button onClick={()=>{setSwitch(!switchh)}}>{startStop}</button>
        <button onClick={()=>{setFlip(true)}}>Reset</button>
        </div>
        </div>
    )
}

function FORM({setFlip,setStart}){
    return(
        <form onSubmit={(e)=>{e.preventDefault(); console.log(e.target[0].value); setStart(Number(e.target[0].value)*3600+Number(e.target[1].value)*60+(Number(e.target[2].value))); setFlip(false);}}>
                <input type="number" min="0" max="59"/>
                Min
                <input type="number" min="0" max="59"/>
                Sec
                <input type="number" min="0" max="59"/>
                <button>Set</button>
            </form>
      
    )
}
export default Stopwatch;