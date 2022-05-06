//똑같이 랜덤 함수 만들고,
//랜덤으로 돌릴 이미지 배열에 src 넣어주고,,
//문서에 이미지 넣는데 img 태그 만들어주고,
//그 이미지 태그 객체에.src 해줘서 넣어주는걸로,,
//src가 프로퍼티인거는 알겠는데, .src로 된다고,,?
//이렇게 만들고 나서 body안에 넣어주기.
function random(arr){
    return Math.floor(Math.random()*arr.length);
}
const imagesrc=[
    "https://cdn.pixabay.com/photo/2016/08/09/21/54/lake-1581879_1280.jpg",
    "https://cdn.pixabay.com/photo/2013/11/28/10/03/river-219972_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/01/12/14/24/night-3078326_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/05/30/00/24/thunderstorm-3440450_1280.jpg",
    "https://cdn.pixabay.com/photo/2021/08/08/20/37/mountains-6531903_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/10/22/17/46/mountains-1761292_1280.jpg",
]
/*
const Printimg = document.createElement("img");
console.log(Printimg);
Printimg.src=imagesrc[random(imagesrc)];
document.body.appendChild(Printimg);
*/

document.body.style.backgroundImage=`url(${imagesrc[random(imagesrc)]})`;
//이거어ㅓㅓㅓㅓㅓㅓㄴ