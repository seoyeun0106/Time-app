//로그인하는 거 다시 연습해보기~//
//로컬 스토리지에 값이 있으면 원래 있던 폼을 숨기고 h2만 내놔야하는데, 그러면
//아예 form도 숨겨놓고 h2만 내놓고..(근데 기억을 못하니까 그것도 innertext로 넣어줘야함.)(이걸 함수로 만들)
//없으면 form 내놓고 submit하는 순간을 함수로 만든걸 그대로. submit하는 순간 value를 local stroage에 넣어놓고 h2에 불러온다음(그 함수)
//form에서 classlist에서 없애고, h2보여주면 됨...

const USERNAME=document.getElementById("username");
const Form=document.querySelector("form");
const HIDDEN="hidden";
const h2=document.querySelector("h2");
const KEY="username";

function greeting(who){
    h2.innerText=`Hello, ${who}`;
    h2.classList.remove(HIDDEN);
}

function store(event){
    event.preventDefault();
    localStorage.setItem(KEY,USERNAME.value);
    //이런것도 함수니까 이런 함수의 매개변수도 함수가 불러질때 불러지는 듯..? 아니근데 이건 함수가 이미 할당된거잖아
    Form.classList.add(HIDDEN);
    greeting(StoredName);// 이런거 다 그냥 함수가 할당될 때 할당되는듯..이라고 생각했는데 왜 null이지??
}

//그럼 선언문으로 형성된 함수들은 진짜 언제든지 불러와도 상관없다는거아냐..
//불러와질때 매개변수가 존재하기만 하면 !
//그럼 함수의 전체 매개변수의 할당은 그냥 불러질 때 할당이 되는듯.. '=' 약간 function();이거자나. 함수는 이름만 나올떄..//
//함수 선언문인 경우에는 매개변수빼고 그 안에 선언된 변수들은 다 호이스팅되어있음. 

const StoredName=localStorage.getItem(KEY);
//const StoredName=localStorage.getItem("username");


if(StoredName==null){
//username 없을 때 처음부터.
Form.classList.remove(HIDDEN);
Form.addEventListener("submit",store);
}else{greeting(StoredName);
//있을 때
}

//Todolist input box에 쓰고 확인누르면 li에 나와야함. input.value 값을 li.innterText로.
//li옆에 x버튼 만들어주고 누르면 li.innerText=""가 되야하는데,
//그 내용이 삭제되야하기 때문에 해당 li를event로 줘야함..이거 뭐였더랑,,event안에 있는 프로퍼티를 살펴보면 나옴..

const TodoForm= document.querySelector("#ohoh");
const TodoInput= document.querySelector("#ohoh>input");
const Todolist=document.querySelector("#Todolist");

let TodoArray=[];

const TodoKey="Todo"


function Tododelete(event){
    const li=event.target.parentNode;
    console.log(li.id);
    TodoArray=TodoArray.filter((TodoArrayitem)=> TodoArrayitem.id !== parseInt(li.id));
    li.remove();    
    localStorage.setItem(TodoKey,JSON.stringify(TodoArray));
    //다시 한번 setItem 해서 local storage값을 업데이트 시켜야함.
}

function listmaker(WrittenTodo){
    //li, span, button 태그 만들고 span 안에는 input 박스의 내용을, button안에는 X를 넣어주고 span과 button을 li노드에 밀어넣음.    
    const Li= document.createElement("li");
    const span =document.createElement("span");
    span.innerText=WrittenTodo.name;
    Li.appendChild(span);
    Li.id=WrittenTodo.id;
    const Delete=document.createElement("button");
    Delete.innerText="X";
    Li.appendChild(Delete);

//그 li를 ul안에 넣음.
  Todolist.appendChild(Li);

//버튼 클릭했을 때 삭제되도록 하는 기능.
    Delete.addEventListener("click",Tododelete);
    TodoInput.value="";
}

/*addEventlistener를 왜 여기 안에 넣어주는 거지ㅜㅠ*/ 
//이 함수는 저장되어있댜가 event가 일어나면 불러와지는건가?
//아니 브라우저에 함수가 등록되어있다는 건데 그럼 그 함수가 호출되고 나서, 더 이상 호출되지 않을 때
//이 안에 있는 addeventlistener 이 어떻게 불러와지는 거지?

function Todo(event){
    event.preventDefault();
    const WrittenTodo=TodoInput.value;
    //배열에 넣기.
    
    const TodoObj={};
    /*
    addeventlistener의 함수블록이면 콘솔에서 불러올 때 안뜸. 함수블록이면 OBJ면 그대로 사라지나? 그래서 const로 중복정의 가능?-> 찾아보기
    그렇게 해서 중복정의되고 사라지는 거면 TodoObj를 여기서 전해주는 것까지 완벽
    전역변수로 지정해주면 TodoObj는 하나가 되고 name은 이후 저장되는 걸로 지정되더라도,, 아예 바뀌면 수정되나??
    PUSH인데 어떤 알고리즘으로 수정이되는 거지ㅠ 으흑,,, 이전의 배열 값을 데이터에서 불러와서(?)
    */    
    TodoObj.id=Date.now();
    TodoObj.name=WrittenTodo;
    TodoArray.push(TodoObj);
    //이렇게 만들고 배열을 집어넣어야 local stroage가 id까지 기억을 하고,name을 집어넣음
    const StringArray =JSON.stringify(TodoArray);
    localStorage.setItem(TodoKey,StringArray);
    listmaker(TodoObj);
};

//그럼 이런 콜백함수는 함수내에선 계속 실행되면서 같은 const륾 ㅏㄴㄷ는 것..(함수 블록이라가능()?)
//const Delete =document.querySelector(#Todolist>li>button);
//이전에도 document에 넣어줄 때, appendchild했남..?
//li만들어주고 value받아서 li에 넣어주고 그걸 ul에 넣어줌
//옆에 button만들어주기,,

TodoForm.addEventListener("submit",Todo);

//local stroage에 배열형식으로 만들어서 넣어주려면, 
//우선 writtenvalue를 배열에 push 하고, 배열을 local storage에 JASON.stringify해서 넣어야함(배열 항목은 쌓여서 local stroage저장)
//그리고 불러올 땐 key로 JASON.parse해서 불러오는데, key가 있을 때만 불러와야(처음에 없을 때 불러오면 안됨)
//배열 하나씩 처리하는 .forEach로 넣어주고 함수에 argument가 있어야.
//배열 받아서 프린트 해주는 부분

if(localStorage.getItem(TodoKey)){
    const parsedArray=JSON.parse(localStorage.getItem(TodoKey));
    //배열은 비어있고 local storage만 계속 차있는 상태. 다시 배열에 local storage내용 parse해서 대체
    TodoArray=parsedArray;
    parsedArray.forEach(listmaker);};

//배열 item 별로 원래 우리가 가지고 있떤 함수를 이용해(?) 순서대로 span li 이렇게 넣어주기,,
//근데 또 reload해서 더 적을 때는 새로 만들면 local stroage에다가 더해져서 되는 게 아니라 새로운 아이템으로 저장됨(이번에 새로 만든 것만,,)
//이럴거면 ul을 local로 가져오는게 낫진않나??

//array에서 제외할 건데,제외할 때 배열의 ID와 일치하지 않는 것을 골라야함,, filter사용.
//1.array 에서 item을 제외해야 나중에 reload되었을 때 기억못함. paint할 때 
//2.array에서 제외해야하는데,'x'를 누른 버튼 li의 항목이 배열의 어떤 항목인지 기억해야하기 때문에 id가필요.
//3.delete를 할 때, parent node,즉 li의 id가 배열의 .id와 같지 않으면 제외하면 됨.
function OK(info){
    console.dir(info);

}
function NO(){
    console.log("Fuck");
}
navigator.geolocation.getCurrentPosition(OK,NO);
