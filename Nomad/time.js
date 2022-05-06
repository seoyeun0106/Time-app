//html에 h2 만들어 놓고 안에 시계 넣는것-> h1을 받아와야함. innerText 해야하니까//
//현재 시간을 받아오기 위해 Date 객체 사용해야함.
//date는 생성자함수고, prototype에 메소드가 저장되어있으므로(생성자함수면..) 인시던트를 만들어서 
//.hour(); 등등 해줘야함..
// 합쳐서 써주고, 각각에 String().padStart(2,0) 넣어줘야..->이거 한꺼번에 할 수는 없나? .padStart를 세번이나 써야하는뎅?
//그리고 매번 나와야하기때문에 맨먼저 함수 불러오고 setInterval(,)써주고
//그럴려면 함수로 딱 시간 하는걸로 묶어줘야.

const Timer =document.querySelector("h2");
 //const Hour=new Date().getHours();
 //Date();이거는 지금 날짜 나오게하는 함수. 바로 실행되고.. 결국 값은 그냥 리턴값인 날짜가됨.
 //Date는 그 함수.
 //new Date();로 형성한 인시던트는 객체인데, 인시던트.메소드함수()해서 인시던트에 있는 
 // ?[[prototype]]===_proto_ 일듓... 프로퍼티(링크)이용해 함수 이용할 수 있음.
 //?이 생성자 함수는 어떻게 생겼길래 인시던트에 뭐 다른 key도 없구 그냥 날짜->프로토타입만 있으까..

 //지금 날을 담았으면서 프로토타입도 가지고 있는 객체가 됨.
 //이 date의 모양이 궁금해,,ㅠ 날짜인데 왜 key도 없구,,
 //hour,min,sec로 바로 받을 수도 있지만(각각 인시던트만들어서 빼내기),한번만 날짜확인하면 되니까 이게효율적 

 function timer(){
    const date=new Date();
    const hour=String(date.getHours()).padStart(2,"0");
    const min=String(date.getMinutes()).padStart(2,"0");
    const sec=String(date.getSeconds()).padStart(2,"0");

    Timer.innerText=`${hour}:${min}:${sec}`;
 }
 timer();
 setInterval(timer,1000);

 //늘 틀리는 거ㅠㅠ 콜백함수할 때나 함수를 정의해놓고 사용할 때 늘 한번씩만 할당이 되는데, 계속 바뀌어야하는데 안 바뀌자너ㅠ