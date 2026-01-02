const slides = document.querySelectorAll(".slide");
const gallery = document.querySelector(".gallery");

let index = 0;

function showSlides(){
slides.forEach(s => s.classList.remove("active"));
slides[index].classList.add("active");

index++;

if(index < slides.length){
setTimeout(showSlides, 2200);
}else{
setTimeout(()=>{
gallery.classList.add("grid");
},1200);
}
}

showSlides();
