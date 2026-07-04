// ---------- ELEMENTS ----------

const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");

const continueBtn = document.getElementById("continueBtn");

const title = document.getElementById("typeTitle");

const yes = document.getElementById("yes");
const no = document.getElementById("no");

const popup = document.getElementById("popup");

const kitkat = document.getElementById("kitkat");
const cadbury = document.getElementById("cadbury");

const chocoMessage = document.getElementById("chocoMessage");

const hearts = document.querySelector(".hearts");


// ---------- FLOATING HEARTS ----------

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML=Math.random()>0.5?"❤️":"💖";

heart.style.left=Math.random()*100+"%";

heart.style.fontSize=(18+Math.random()*20)+"px";

heart.style.animationDuration=(6+Math.random()*5)+"s";

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

}

setInterval(createHeart,350);


// ---------- CONTINUE ----------

continueBtn.onclick=()=>{

screen1.classList.add("hide");

screen2.classList.remove("hide");

typeWriter();

}


// ---------- TYPEWRITER ----------

const text="Will You Be My Forever? ❤️";

function typeWriter(){

let i=0;

title.innerHTML="";

const timer=setInterval(()=>{

title.innerHTML+=text.charAt(i);

i++;

if(i>=text.length){

clearInterval(timer);

}

},70);

}


// ---------- ESCAPING NO BUTTON ----------

function moveButton(){

const x=Math.random()*(window.innerWidth-160);

const y=Math.random()*(window.innerHeight-90);

no.style.left=x+"px";

no.style.top=y+"px";

}

no.addEventListener("mouseenter",moveButton);

no.addEventListener("touchstart",(e)=>{

e.preventDefault();

moveButton();

},{passive:false});


// ---------- YES ----------

yes.onclick=()=>{

popup.style.display="flex";

confetti({

particleCount:300,

spread:180,

origin:{y:.6}

});

setTimeout(()=>{

confetti({

particleCount:150,

spread:90,

origin:{x:.2,y:.3}

});

},300);

setTimeout(()=>{

confetti({

particleCount:150,

spread:90,

origin:{x:.8,y:.3}

});

},600);

}


// ---------- KITKAT ----------

kitkat.onclick=()=>{

chocoMessage.style.display="block";

chocoMessage.innerHTML=`

<h2 style="color:#ff2e63">

🍫 KitKat

</h2>

<p>

Have a Break... ❤️

<br><br>

The sweetest surprise

is waiting inside

<b>Cadbury Dairy Milk.</b>

<br><br>

👇 Click Dairy Milk

</p>

`;

cadbury.classList.add("glow");

}


// ---------- DAIRY MILK ----------

cadbury.onclick=()=>{

typeLetter();

}


// ---------- LOVE LETTER ----------

const letter = `💌

To My Sweetest Person,

Life became sweeter
the day you came into it.

Every smile of yours
has become my favourite reason to smile.

No matter where life takes us,
I just want one thing...

To walk every step with you.

❤️ I Love You Forever ❤️

✨ Forever Starts Today ✨`;

function typeLetter(){

let i=0;

chocoMessage.style.display="block";

chocoMessage.innerHTML="";

const timer=setInterval(()=>{

chocoMessage.innerHTML+=letter.charAt(i);

i++;

if(i>=letter.length){

clearInterval(timer);

}

},20);

}


// ---------- CLOSE POPUP ----------

popup.onclick=(e)=>{

if(e.target===popup){

popup.style.display="none";

}

}