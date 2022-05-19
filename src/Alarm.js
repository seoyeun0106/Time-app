//깨달은 것.. state로 인해 값이 바뀌는 변수일 경우, 그냥 일반 변수에 정의하는 게 나을듯. 
//state 와 관련없이 이전 값을 기억해서 계속 숫자가 바뀌는 변수일 경우, useRef를 사용해야함.
//console.log(WrittenAlarm);
            //Alarmli=React.createElement('div',null,WrittenAlarm);
            //let root=document.getElementById('lists');
            //let hey=ReactDOM.render(Alarmli,root); 
            //console.dir(hey);
            //console.log(Alarmli);
            
import React,{useState,useRef} from 'react';
import './App.scss';
function Alarm(){
    //Clock
    let [now,setNow]=useState(new Date().toLocaleTimeString('en-us',{hour12:false}));
    function callback(){
        setNow(new Date().toLocaleTimeString('en-us',{hour12:false}));
    }
    setInterval(callback,1000);
    
    //openForm 
    let [openForm,setOpenForm]=useState(false);
    let plusorMinus;
    if(openForm==false)plusorMinus='+'
    else plusorMinus='-';
    
    //Alarm
    let [AlarmLists,setAlarmLists]=useState([]);
    //ringing
    function ringing(){
        alert("Alarm is ringing");
    }
    AlarmLists.map((alarm)=>{
       if(`${alarm.hour}:${alarm.min}:00`==now){
           ringing();
       }
    })
    return(
        <div className='content'>
            Now {now}
            <div id='lists'>Alarm lists</div>
            <AlarmList setAlarmLists={setAlarmLists} AlarmLists={AlarmLists}></AlarmList>
            {openForm?<FORM setAlarmLists={setAlarmLists} AlarmLists={AlarmLists}></FORM>:null}
            <div><button className='buttons' onClick={()=>{setOpenForm(!openForm)}}>{plusorMinus}</button></div>       
        </div>
    )
}

function FORM({setAlarmLists,AlarmLists}){
    let id=useRef(0);
    //render는 
    function AddAlarmlist(hour,min){
        let list={
            id: id.current,
            hour:hour,
            min:min
        };
        setAlarmLists(AlarmLists.concat(list));
        id.current= id.current+1;  
    }

    return(
        <form onSubmit={(e)=>{
            e.preventDefault();
            AddAlarmlist(e.target[0].value,e.target[1].value);
            console.log(AlarmLists);
            }}>
        <input type="number" max={23} min={0}></input>
        Hour   
        <input type="number" max={59} min={0} ></input>
        Min
        <button>Set Alarm</button>
        </form>
    )
}

function AlarmList({AlarmLists}){
    return(
        <div>
        {AlarmLists.map((alarm)=>{
            return(
            <div>
               {String(alarm.hour).padStart(2,0)}:{String(alarm.min).padStart(2,0)}
            </div>
            )
        })
    
        }
        </div>
    )
}
export default Alarm;