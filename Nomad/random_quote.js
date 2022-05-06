//배열을 만들고 그 배열안에 객체를 넣어서 불러올 key들을 지정해준 다음(quote와 author)
//넣고자 하는 객체.innerText='배열[랜덤한 숫자]'
//여기서 랜덤한 숫자를 함수로. math.random(0-1사이의 숫자들을 줌.(1은 안주고,, )그래서 그냥 .length만큼 곱하고 버리면 끝.)이용. !
//여기서 근데 주의해야할 게 그냥 배열만 통쨰로 넣는게 아니라(그럼 어떻게 나올가), 객체.key 해서 그것만 나타내면 됨.
const quote =document.querySelector("#quote span:first-child");
const author=document.querySelector("#quote span:last-child");
const quotes = [
{
    quote: "대학 도서관에 불이 꺼지면 그 학교에 미래는 없다.",
    author: "강수연(1999-)",
},
{    quote: "가짜 배고픔은 진짜 음식으로 이겨낸다",
    author:"강수연(1999-)",
},
{
    quote: "꼬꼬다, 꼬꼬~.", 
    author:"이규빈(2000-)"
},
{
    quote: "닥쳐",
    author:"김가현(2001-)"
},
{
    quote: "이가은이랑 널뛰기하는 사람은 다치게 되어있다.",
    author:"현대고 사람들"
},
{
    quote: "파인애플! 핫더그! 아이스크림!",
    author:"이준영(2000-)"
},
{
    quote: "내 딸은 참 착하다!",
    author:"염지수(1967-)"
},
{
    quote: "무슨 말 써야할지 모르겠다",
    author:"나(2000-)"
},
{
    quote: "앞으로는 한국에 짱 박혀 있겠다.",
    author:"나(2000-)"
},
{
    quote: "나는 고자다~~~~~~",
    author:"이가은(2000-)"
}
]
function random(arr){
    return Math.floor(Math.random()*arr.length);
}
//배열의 개수에 따라 랜덤한 숫자가 나오게 설정함.
function printQuote(a){
quote.innerText=quotes[a].quote;
author.innerText=quotes[a].author;};

printQuote(random(quotes));

//아니면, 
/*
function printQuote(arr,key_1,key_2){
const a = Math.floor(Math.random()*arr.length);
quote.innerText=arr[a].key_1;
author.innerText=arr[a].key_2
}
printQuote(quotes,quote,author);
이건 오ㅐ 안될까..*/
//랜덤 변수가 한 장소에서는 같길 바란다면 함수 안에서 매개변수로 줄 수도 있을듯 (근데 왜 안 되는지는 의문)