(function(){
var b=document.querySelector(".menu-btn"),n=document.getElementById("nav");
if(b&&n){b.addEventListener("click",function(){var o=n.classList.toggle("open");b.setAttribute("aria-expanded",o)});
document.addEventListener("keydown",function(e){if(e.key==="Escape"&&n.classList.contains("open")){n.classList.remove("open");b.setAttribute("aria-expanded","false");b.focus()}})}
var y=document.getElementById("yr");if(y)y.textContent=new Date().getFullYear();
document.querySelectorAll(".chip").forEach(function(c){c.addEventListener("click",function(){
document.querySelectorAll(".chip").forEach(function(x){x.classList.toggle("on",x===c)});
document.querySelectorAll(".res").forEach(function(r){r.hidden=c.dataset.f!=="all"&&r.dataset.cat!==c.dataset.f})})});
})();