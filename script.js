// Dark / Light Mode
function toggleMode(){
document.body.classList.toggle("light");
document.body.classList.toggle("dark");
}

// Animation
const fades=document.querySelectorAll(".fade");

window.addEventListener("scroll",()=>{

fades.forEach(el=>{

const pos=el.getBoundingClientRect().top;
const win=window.innerHeight-100;

if(pos<win){
el.classList.add("show");
}

});

});