var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click",()=>{
    document.querySelector(".drop-down").setAttribute("style","display:block;")
    hamburger.innerHTML=`<i class="fa-solid fa-xmark fa-2xl" style="color: #ffffff;"></i>`;
});