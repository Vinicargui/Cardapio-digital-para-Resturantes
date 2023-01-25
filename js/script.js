const btns = document.querySelectorAll(".btn");
const sections = document.querySelectorAll("section");

// btns.forEach((e)=>{
//         e.addEventListener("click",()=>{
//             pratos.setAttribute(style.display = "block")
//         })
// })


btns.forEach((btn, idx) => {
    // você adicionou um evento de clique aqui
    btn.addEventListener('click', () => {
      // eu chamei a nodeList das sections e para cada section eu fiz uma lógica
      sections.forEach(section => {
        // se a section já estiver visível, ela sai de tela
        if (section.style.display === 'grid') {
          section.style.display = 'none';
        }
        // eu deixo visível o bloco equivalente ao botão clicado
        sections[idx].style.display = 'grid';
      });
    });
  });