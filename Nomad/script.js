//사용자가 submit 누르면 다른 화면으로 넘어가지말기.
//submit 버튼이 실행됐을 때 기본 이벤트 막아야함.!
//사용자의 이름 기억하기. !
//그 사용자의 이름을 로컬 스토리지에 저장 !
//그 뒤에 form 없애고,h1 불러오기.
//새로고침 버튼 눌렀을 때 -> 로컬 스토리지에 사용자 이름이 있으면 h1내용만 보여주고 없으면 form보여주기.
//로그아웃 버튼을 누르면 실행되야할 것: 로컬 스토리지에 저장된 내용 사라지고 새로고침해줘야함
//회원가입 버튼을 누르면 ? href로 이동하면서 새로운 페이지에 회원가입 내용 떠야함,, 

const logInId= document.querySelector("#logInForm input");
const Form= document.querySelector("#logInForm");
const GREETING=document.querySelector("#greeting");
const USERNAME_KEY= "username";
const HIDDEN ="hidden"
const logOut= document.querySelector("#logOut");
//h1에 변수 받아서 넣어주고 다시 보여주기.

function greeting(username){
    GREETING.innerText=`Hello ${username}!`; 
    GREETING.classList.remove(HIDDEN);}

//submit버튼 눌렀을 때 기본 이벤트 막고 적힌 값 저장 후 greeting 함수 호출

function LogIn(event){
    event.preventDefault();
    const username=logInId.value;
    localStorage.setItem(USERNAME_KEY,username);
    Form.classList.add(HIDDEN);
    greeting(username);
    logOut.classList.remove(HIDDEN);
    
}

function GotoFirstPage(){
    localStorage.removeItem(USERNAME_KEY);
    window.location.reload();}


//로컬 스토리지에서 키 대로 아이템 받아와서 변수에 저장.
//아이템을 받아와야하니까 로컬스토리지에서 뒤적거릴 때 LogIn 함수 전이라 null로 뜰 수도 있나? 매개변수까지 다 호이스팅해놓나?????
//함수 저장이 어떻게 되어있길래 아직 username이 지정되기도 전에 ????????아니 이것도 콜백함수라??? 머리아파ㅠㅠㅠㅠ

const savedUserName = localStorage.getItem(USERNAME_KEY);

//순서: 함수들은 초기화와 호이스팅이 되어있는 상태. 변수들은 선언과 호이스팅이 되어있지만, 초기화는 할당과 같이(?)일어나는듯. 그래서
// 콜백함수 내에서는username이라던지 greeting이라던지 이미 받아서 선언을 해줬고 greeting()할 때는 greeting도 이미 선언이 되어있음.
//

if(savedUserName===null){
    Form.classList.remove(HIDDEN);
    Form.addEventListener("submit",LogIn);
    }else{greeting(savedUserName);
    logOut.classList.remove(HIDDEN);
    }

logOut.addEventListener("click",GotoFirstPage);
    
