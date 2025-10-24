const original = document.querySelector(".produto")
const produtos = document.querySelector("#produtos")

produtos.innerHTML = ""
for (const p of lsProdutos){
const clone = original.cloneNode(true)
clone.querySelector(".nome").innerText = p.nome
clone.querySelector(".descricao").innerText = p.descricao
clone.querySelector("img").src = p.img
clone.querySelector(".valor").innerText = `R$ ${p.valor.toFixed(2)}`
produtos.appendChild(clone)
}

document.querySelectorAll(".produto").forEach((p,i) =>{
    p.addEventListener("click", ()=>{
        p.classList.toggle("marcado")
        if (lsProdutos[i].marcado == undefined){
            lsProdutos[i].marcado = 1
        } else {
            delete lsProdutos[i].marcado
        }
        atualizarQt()
    })
})
function atualizarQt(){
    const qt = lsProdutos.filter(p => p.marcado == 1)
    document.querySelector("#qt").innerText = qt.length > 0 ? qt.length : ""
    // if (p.length == 0){
    //     document.querySelector("#qt").innerText = ""
    // }
}

document.querySelector('#btVela').addEventListener("click", carrinho)


function carrinho(){
    const qt = document.querySelector("#qt").innerText
    if(qt == 1){
        alert("Necessário selecionar um item")
        return
    }
}