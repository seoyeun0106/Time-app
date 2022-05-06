import React,{useState,useEffect,useRef} from 'react';
import useInterval from './useInterval.js';
import './App.scss';
import writeTime from './time.js';
//useRef()를 활용하여 savedCallback을 업데이트->이걸 useEffect에 넣어서. useEffect에 넣지 않은 이유는 
//useEffect에 넣으면 무한 루프에 빠지기 때문. 딱히 클로져랑 관련이 왜 있는지는 모르겠음. 
//렉시컬 스코프를 따른다는 것<- 클로져가 생기는 이유.

//1. tick으로 지역함수로 받아오면 왜 달라지는지. useEffect가 계속 업데이트 되는 것도 아닌데?
//tick을 callback으로 불러와야 결국 달라진 time을 받을 수 있어서. setInterval안에서만 계속 반복하면 setInterval의 클로져(?) 땜시 안됨.
// 

//2. 왜 useRef를 사용해서 받아서 useRef에 그냥 callback을 넣는 걸로 끝이 아니고 굳이 useEffect에 넣어주는지.
//-> useRef가 값은 계속 바뀌지만 useState랑 다르게 재렌더링이 일어나지 않기 때문에 UI를 업데이트 해주기 위해서이다.
//-> 근데 useEffect에 넣지 않아도 그냥 됨. 어짜피 time 바뀌어서 재 렌더링 일어남.
//->진짜 알 수 없는 부분. 

// 3.useRef에 넣어주는 이유가 뭐지. ㅇㅅㅇ
//-> 그냥 일반 변수에 넣어주면 작동 안 함. useRef에 넣어주면 계속 값이 업데이트가 됨. 
//일반 변수도 업데이트가 되는데 재 렌더링될 때 살아남지 못함.


function Timer(){
let [switchh,setSwitch]=useState(true);
let [time,setTime]=useState(0);
useInterval(()=>{setTime(time+1)},switchh?null:10);

//재렌더링 시 원래의 함수는 다시 실행되지만, useEffect에 넣으면 계속 유지되기 때문.
return(
    <div className='content'>
        {writeTime(time)}
    <div className='buttons'>
    <button onClick={()=>{setSwitch(false);}}>start</button>
    <button onClick={()=>{setSwitch(true);}}>stop</button>
    <button onClick={()=>{setTime(0)}}>Restart</button>
    </div>
    </div>
)    
}


export default Timer;