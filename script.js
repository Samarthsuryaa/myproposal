// ---------- Elements ----------

const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");

const continueBtn = document.getElementById("continueBtn");

const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

const popup = document.getElementById("popup");

const title = document.getElementById("title");

const hearts = document.querySelector(".hearts");


// ---------- Floating Hearts ----------

function createHeart(){

const heart=document.createElement("span");

heart.innerHTML=Math.random()>0.5?"❤️":"💖";

heart.style.position="absolute";

heart.style.left=Math.random()*100+"%";

heart.style.bottom="-40px";

heart.style.fontSize=(20+Math.random()*20)+"px";

heart.style.animation=`heart ${6+Math.random()*5}s linear`;

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},11000);

}

setInterval(createHeart,400);


// ---------- Continue ----------

continueBtn.onclick=()=>{

screen1.classList.add("hide");

screen2.classList.remove("hide");

typeWriter();

}


// ---------- Typewriter ----------

const text="Will You Be My Forever? ❤️";

let i=0;

function typeWriter(){

title.innerHTML="";

i=0;

const timer=setInterval(()=>{

title.innerHTML+=text.charAt(i);

i++;

if(i>=text.length){

clearInterval(timer);

}

},80);

}


// ---------- NO Button Escape ----------

function moveButton(){

const x=Math.random()*(window.innerWidth-150);

const y=Math.random()*(window.innerHeight-90);

noBtn.style.left=x+"px";

noBtn.style.top=y+"px";

}

noBtn.addEventListener("mouseenter",moveButton);

noBtn.addEventListener("touchstart",(e)=>{

e.preventDefault();

moveButton();

},{passive:false});


// ---------- YES ----------

yesBtn.onclick=()=>{

popup.style.display="flex";

confetti({

particleCount:250,

spread:180,

origin:{y:.6}

});

setTimeout(()=>{

confetti({

particleCount:180,

spread:100,

origin:{x:.2,y:.2}

});

},300);

setTimeout(()=>{

confetti({

particleCount:180,

spread:100,

origin:{x:.8,y:.2}

});

},600);

}


// ---------- Close Popup ----------

popup.onclick=(e)=>{

if(e.target===popup){

popup.style.display="none";

}

}


// ---------- Heart Animation ----------

const style=document.createElement("style");

style.innerHTML=`

@keyframes heart{

0%{

transform:translateY(0) scale(.8);

opacity:.8;

}

100%{

transform:translateY(-120vh) rotate(360deg) scale(1.5);

opacity:0;

}

}

`;

document.head.appendChild(style);