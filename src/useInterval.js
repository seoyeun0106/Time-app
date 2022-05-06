import React,{useState,useEffect,useRef} from 'react';

function useInterval(callback,delay){
    let savedCallback=useRef();
    savedCallback.current=callback;
    function tick(){
        savedCallback.current();
    }
    //delay를 바꾸면 useEffect가 업데이트가 되기 떄문에, delay에 변화를 줘서 작동하는지 안 하는지 바꿈.
    useEffect(() => {    
        if(delay!==null){
            let id= setInterval(tick,delay);
            return () => {
            clearInterval(id);
            };
        }

    },[delay]);
}

export default useInterval;