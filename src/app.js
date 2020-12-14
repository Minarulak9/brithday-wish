let audio = document.querySelector(".music");
window.onload=()=>{
    audio.play();
}
let img = document.querySelector(".image")
let imgSrcMbl = ["./img/cake1.jpg","./img/cake2.jpg"]
let imgSrcPc = ["./img/pic1.jpg","./img/pic2.jpg","./img/pic3.jpg","./img/pic4.jpg"]
let imgIndex = 0;
let deviceWidth = window.innerWidth
setInterval(() => {
    if (deviceWidth>800) {
        img.src=imgSrcPc[imgIndex]
        imgIndex++;
        if (imgIndex>imgSrcPc.length-1) {
        imgIndex=0;
        }
    }
    if (deviceWidth<800) {
        img.src=imgSrcMbl[imgIndex]
        imgIndex++;
        if (imgIndex>imgSrcMbl.length-1) {
        imgIndex=0;
        }
        
    }
}, 5000);

let h1 = document.querySelector(".line")
let lines = ["Happy Happy Brithday","Many Many Happy Returns Of This Spacial Day","I Wish Lots Of Happiness, Prosperity, Good Fortune And Evrything You","Have a Fantastic Day & an Awesome Life Ahead","Enjoy This Spacial Day............"]
let linesIndex=0;
setTimeout(()=>{
    let mak = setInterval(() => {
        h1.innerHTML=lines[linesIndex];
        linesIndex++;
        if (linesIndex>lines.length) {
            clearInterval(mak)
            h1.innerHTML="🍧😋😋😋🥰🥰🥰🎇🎇🎆🎆Happy Brithday🎈🎈🎈🧨🎉🎊🎊🎊🎊🎊🎁🎁🎁"
        }
    }, 5500);
},13000)

