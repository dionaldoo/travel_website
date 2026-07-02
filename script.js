window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

setTimeout(()=>{

loader.style.opacity="0";

loader.style.visibility="hidden";

},800);

});

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

navbar.classList.add("active");

}else{

navbar.classList.remove("active");

}

});

const menuToggle=document.querySelector(".menu-toggle");

const navMenu=document.querySelector(".nav-menu");

menuToggle.addEventListener("click",()=>{

navMenu.classList.toggle("show");

});

document.querySelectorAll(".nav-menu a").forEach(link=>{

link.addEventListener("click",()=>{

navMenu.classList.remove("show");

});

});

const words=[

"Indonesia",

"Bali",

"Lombok",

"Raja Ampat",

"Labuan Bajo",

"Bersama Kami"

];

let wordIndex=0;
let charIndex=0;
let deleting=false;

const typing=document.getElementById("typing");

function typingEffect(){

const current=words[wordIndex];

if(!deleting){

typing.textContent=current.substring(0,charIndex++);

if(charIndex>current.length){

deleting=true;

setTimeout(typingEffect,1200);

return;

}

}else{

typing.textContent=current.substring(0,charIndex--);

if(charIndex<0){

deleting=false;

wordIndex++;

if(wordIndex>=words.length){

wordIndex=0;

}

}

}

setTimeout(typingEffect,deleting?60:120);

}

typingEffect();

const counters=document.querySelectorAll(".number");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.dataset.target;

let count=0;

const speed=target/120;

const update=()=>{

count+=speed;

if(count<target){

counter.innerHTML=Math.ceil(count);

requestAnimationFrame(update);

}else{

counter.innerHTML=target.toLocaleString();

}

};

update();

observer.unobserve(counter);

}

});

});

counters.forEach(counter=>observer.observe(counter));

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

const faq=document.querySelectorAll(".faq-item");

faq.forEach(item=>{

const question=item.querySelector(".faq-question");

question.addEventListener("click",()=>{

faq.forEach(data=>{

if(data!==item){

data.classList.remove("active");

}

});

item.classList.toggle("active");

});

});

const targetDate=new Date();

targetDate.setDate(targetDate.getDate()+10);

function updateCountdown(){

const now=new Date().getTime();

const distance=targetDate-now;

const days=Math.floor(distance/(1000*60*60*24));

const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes=Math.floor((distance%(1000*60*60))/(1000*60));

const seconds=Math.floor((distance%(1000*60))/1000);

const countdown=document.getElementById("countdown");

if(countdown){

countdown.innerHTML=

`${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;

}

}

setInterval(updateCountdown,1000);

const progress=document.createElement("div");

progress.id="progressBar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const totalHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const progressWidth=(window.scrollY/totalHeight)*100;

progress.style.width=progressWidth+"%";

});

const cards=document.querySelectorAll(".service-card,.package-card,.about");

const reveal=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.2
});

cards.forEach(card=>{

card.classList.add("fade-up");

reveal.observe(card);

});

function showToast(text){

const toast=document.createElement("div");

toast.className="toast";

toast.innerHTML=text;

document.body.appendChild(toast);

setTimeout(()=>{

toast.classList.add("show");

},100);

setTimeout(()=>{

toast.classList.remove("show");

setTimeout(()=>{

toast.remove();

},500);

},2500);

}

document.querySelectorAll(".btn-package").forEach(button=>{

button.addEventListener("click",()=>{

showToast("Paket berhasil dipilih ✈️");

});

});

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const size=Math.max(this.clientWidth,this.clientHeight);

ripple.className="ripple";

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=e.offsetX-size/2+"px";

ripple.style.top=e.offsetY-size/2+"px";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

const sections=document.querySelectorAll("section");

const links=document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

if(window.scrollY>=top){

current=section.getAttribute("id");

}

});

links.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});
});
console.log("TravelGo Premium Ready 🚀");
const heroImage=document.querySelector(".hero-image img");
const heroImages=[
"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600",
"https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600",
"https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1600",
"https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600"
];
let currentHero=0;
setInterval(()=>{
currentHero++;
if(currentHero>=heroImages.length){
currentHero=0;
}
heroImage.style.opacity="0";
setTimeout(()=>{
heroImage.src=heroImages[currentHero];
heroImage.style.opacity="1";
},400);
},5000);
window.addEventListener("mousemove",(e)=>{
const x=(window.innerWidth/2-e.pageX)/35;
const y=(window.innerHeight/2-e.pageY)/35;
if(heroImage){
heroImage.style.transform=`translate(${x}px,${y}px)`;
}
});
setTimeout(()=>{
showToast("Selamat Datang di TravelGo ✈️");
},1200);
window.addEventListener("scroll",()=>{
const hero=document.querySelector(".hero");
hero.style.backgroundPositionY=window.scrollY*0.4+"px";
});
window.addEventListener("resize",()=>{
if(window.innerWidth>768){
navMenu.classList.remove("show");
}
});
document.querySelector(".btn-primary").addEventListener("click",()=>{

showToast("Silakan pilih paket wisata terbaik.");

});

document.querySelector(".btn-secondary").addEventListener("click",()=>{

document.querySelector("#about").scrollIntoView({

behavior:"smooth"

});

});

document.querySelectorAll(".package-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.borderColor="#3b82f6";

});

card.addEventListener("mouseleave",()=>{

card.style.borderColor="rgba(255,255,255,.08)";

});

});

window.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

navMenu.classList.remove("show");

}

});

document.querySelectorAll(".package-card").forEach((card,index)=>{

card.style.animationDelay=index*0.2+"s";

});

console.log("TravelGo Premium Version Loaded Successfully");