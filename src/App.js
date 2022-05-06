import React,{useState,useEffect} from 'react';
import Alarm from './Alarm.js';
import StopWatch from './Stopwatch';
import Timer from './Timer.js';
import {Link,Route,Switch} from 'react-router-dom';
import './App.scss';
import {Button, Navbar, Container, Nav} from 'react-bootstrap';
//고쳐야하는 버그
//1. 알람 리스트 안 되는 거 고치기 ✔
//2. 알람 ringing 두번 나오는 거 고치기 
//3. 알람 setState 왜 한번 클릭에 안되는 건지 고치기. ✔
//4. 클릭하는거

// 추가해야할 기능
//1. timer쓰다가 stopwatch 쓰면 reset 되는거. 계속 혼자 시행되고 있게 하기. 
//근데 이거 그럼 Link랑 Route 쓰면 안되는 거 아냐ㅜㅠㅠ?
//2. 디자인적으로 input Num 사이즈 똑같이 올리기.

function App() {
  return (
    <div className="App">
      
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="#">
          <Link to='/alarm'>
            <div className='linkeditem'>
            Alarm
            </div>
          </Link>
          </Nav.Link>
        </Nav.Item>
        
        <Nav.Item>
          <Nav.Link eventKey="link-2">
            <Link to='/timer'>
              <div className='linkeditem'>
              Stopwatch
              </div> 
            </Link>
          </Nav.Link>
        </Nav.Item>
        
        <Nav.Item>
          <Nav.Link eventKey="link-3">
            <Link to='/stopwatch'>
              <div className='linkeditem'>
              Timer
              </div>
            </Link>
          </Nav.Link>
        </Nav.Item>  
      </Nav>
      <Route exact path='/alarm'><Alarm></Alarm></Route>
      <Route exact path='/timer'><Timer></Timer></Route>
      <Route exact path='/stopwatch'><StopWatch></StopWatch></Route>
    </div>
  );
}

export default App;
