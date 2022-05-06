// 1. login system
/* 
1. get the username ✔
2. print it out on the screen(with the checkbox box disappeared)✔
3. remember the username ✔
여기서 배운 것: reload됐을 때 다시 쓸 수 있는 함수의 재활용.
*/
const logInForm=document.querySelector('#logIn');
const logInText=document.querySelector('#logIn>Input:first-child');
const usernameKey="username"
const restoredName=localStorage.getItem(usernameKey);

function greeting(userName){
    logInForm.classList.add('hidden');
    const greetingBox=document.querySelector('h2');
    greetingBox.innerText=`Hello, ${userName}`;
   }

function logIn(event){
    event.preventDefault();
    const userName=logInText.value;
    logInText.value='';
    //이건 나중에 여기로 옮김! 다시 한번 setItem 할 필요 없을 것 같아서.
    localStorage.setItem(usernameKey,userName);
    greeting(userName);
}

logInForm.addEventListener("submit",logIn);

if(restoredName){
    greeting(restoredName);   
}

// 2.뒤에 chrome 배경화면 떠야함.
/*
1. Appoint the background-wallpaper by random.
    1.1 list the background images in array ✔
    1.2 make a random num (which is intiger)✔
    1.3 print it randomly out on the screen✔
*/
const boDy = document.querySelector('body');
const backgroundImgs=['https://cdn.pixabay.com/photo/2021/10/14/15/11/cathedral-6709412_1280.jpg',
'https://cdn.pixabay.com/photo/2021/11/13/14/55/mountains-6791530_1280.jpg','https://cdn.pixabay.com/photo/2019/02/25/16/46/breakfast-4020028_1280.jpg','https://cdn.pixabay.com/photo/2021/07/30/20/23/paris-6510643_1280.jpg',
'https://cdn.pixabay.com/photo/2016/05/02/09/45/japan-1366872_1280.jpg','https://cdn.pixabay.com/photo/2021/09/26/11/54/architecture-6657475_1280.jpg'
,'https://cdn.pixabay.com/photo/2018/09/28/21/10/saint-isaacs-cathedral-3710237_1280.jpg','https://cdn.pixabay.com/photo/2017/08/05/10/44/sunset-2582691_1280.jpg','https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_1280.jpg'];

function random(array){
const random=Math.floor(Math.random()*array.length);
return random;
}

boDy.style.backgroundImage=`url(${backgroundImgs[random(backgroundImgs)]})`;

//시간
//생성자 함수는 그 함수의 return값은 지금 시간이고, prototype에는 gethours,..
//Date() 하면 바로 시간을 얻을 수 있고, Date(안에 시간을 넣으면) 그걸 얻을 수 있음.
//그리고 그걸로 객체 형성하면 그거의 prototype으로 getHours할 수 있음. 
//1.시간: 분am/pm ✔
//2.밑에 날짜 Wed 15 March
//배운 것: Date라는 생성자 함수와 프로토타입
const watch=document.querySelector('.watch')
const apm=document.querySelector('.watch+span')
const anothertime=document.querySelector('h3')
function datecounter(){
    const date=new Date;
    const hour=date.getHours();
    const min=date.getMinutes();
    let ampm='';
    if(hour>=12){
        ampm='PM';
    }else{
        ampm='AM';
    }
    const time=`${hour}:${min}`;
    watch.innerText=time;
    apm.innerText=ampm;
    anothertime.innerText=date.toDateString();
}

datecounter();

//투두메이트
//1.투두메이트 내용 받기 ✔
//2.받은 내용 화면에 출력 ✔
//3.받은 내용 삭제 가능 버튼 ✔
//4.local stroage에 저장해서 reload해도 기억하기 ✔
/*  4.1 배열에 item하나씩 집어넣기 ✔
    4.2 local storage에 배열 집어넣기(stringfy)✔
    4.3 if local storage에 item이 있으면 local storage에서 빼와서 출력(parse)✔
    *local storage를 다시 배열에 넣어줘야 reload하면서 비워진 배열이 회복됨.
    */
//5.내용 삭제한거 local storage에서 삭제하기.✔
/*  5.1  * 구분하기 위해서 배열에 push할 때 id(random 숫자) 넣고 해당하는 id를 가지고 있는 배열 item 삭제해줘야함.✔
*/
const todoBox=document.querySelector('#todo');
const ul=document.querySelector('ul');
const todoform=document.querySelector('.todoform'); 
let todoArray=[];
const list=document.querySelector('.list');
function deleteTodo(event){
    const li=event.target.parentNode;
    console.log(li);
    //todoArray에서 해당 item을 빼서 그 array를 다시 local storage에 넣어주는 것(같은 키로)
    /*근데 이렇게 하면 이 item들이 key가 똑같은데 또 들어오는 거 아냐???? ㅠ */
    todoArray=todoArray.filter((todoArrayItem)=>todoArrayItem.id !== parseInt(li.id));
    li.remove(); 
    localStorage.setItem('todo',JSON.stringify(todoArray));
}

function printout(todoItem){
    const li=document.createElement('li');
    const span=document.createElement('span');
    const deleteButton=document.createElement('button');
    deleteButton.innerText='❌';
    const checkbox=document.createElement('input');
  checkbox.type='checkbox';
    li.appendChild(checkbox);
    span.innerText=todoItem.main;
    li.id=todoItem.id;
    deleteButton.addEventListener('click',deleteTodo);
    li.appendChild(span);
    li.append(deleteButton); 
    ul.appendChild(li);

}
function addtodo(event){
    event.preventDefault();
    const todoItem={
        main:todoBox.value,
        id: Date.now(),
    }    
    printout(todoItem);
    todoArray.push(todoItem);
    todoBox.value='';
    localStorage.setItem('todo',JSON.stringify(todoArray));
//똑같은 키로 setitem하면 원래 item들에 더해지는 듯.
}
//버튼 하나를 printout할때마다 만들어주고, 그 버튼을 클릭하면 삭제되도록(근데 return 하고 나면 그 함수는 새로운 함수로 불러와지는데,,
//delete를 어떻게 기억하지(?)(?)?()?넘나리헷갈리는 것..

todoform.addEventListener('submit',addtodo);
if(localStorage.getItem('todo')){
    todoArray=JSON.parse(localStorage.getItem('todo'));
    todoArray.forEach(element => {
     printout(element);   
    });    
    }

list.addEventListener('click',(()=>{ul.classList.toggle('hidden');
todoform.classList.toggle('hidden');}));