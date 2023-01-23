const btn = document.querySelectorAll(".botoes");
const pratos = document.querySelector(".pratos");

btn.forEach((e)=>{
        e.addEventListener("click",()=>{
            pratos.setAttribute(style.display = "block")
        })
})