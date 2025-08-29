// criar a referência ao formulário e aos elenteos h3 e h4
const frm = document.querySelector("form")
const resp1 = document.querySelector ("h3")
const resp2 = document.querySelector ("h4")

//criar um ouvinte de evento, acionado quando o botão 'submit' for clicado
frm.addEventListener("submit", (e)=>{
    const titulo = frm.inTitulo.value // obtem o conteúdo do campo "titulo"
    const duracao = frm.inDuracao.value // obtem o conteúdo do campo "duração"
    
    const horas = Math.floor(duracao/60) // convertendo minutos em horas
    const minuto = duracao%60 // convertendo o resto da divisão em minutos
    
    resp1.innerText = titulo //
    resp2.innerText = `${horas} hora(s) e ${minuto} minuto(s)`; // 

    e.preventDefault() // evita o envio do form
})