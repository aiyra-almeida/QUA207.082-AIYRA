const original = document.querySelector(".produto")
const produtos = document.querySelector(".produtos")
const divCarrinho = document.querySelector(".carrinho")

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
        if (lsProdutos[i].qt == undefined){
            lsProdutos[i].qt = 1
        } else {
            delete lsProdutos[i].qt
        }
        atualizarQt()
    })
})
function atualizarQt(){
    const qt = lsProdutos.filter(p => p.qt >= 1)
    document.querySelector("#qt").innerText = qt.length > 0 ? qt.length : ""
}

document.querySelector('#btLogo').addEventListener("click", carrinho)

function carrinho(){
    const qt = document.querySelector("#qt").innerText
    if(qt == "" ){
        alert("Necessário selecionar um item")
        return
    }
    produtos.classList.toggle("ocultar")
    divCarrinho.classList.toggle("ocultar")
    atualizarTb()
}
let pedido
function atualizarTb(){
    pedido = ""
    let total = 0
    const tbody = document.querySelector("tbody")
    tbody.innerHTML = ""
    for (let i = 0; i < lsProdutos.length; i++){
        const p = lsProdutos[i]
        if(p.qt > 0){
            tbody.innerHTML+=`<tr>
            <td>${p.nome}</td>
            <td>${p.qt}</td>
            <td>${p.valor.toFixed(2)}</td>
            <td>${(p.qt*p.valor).toFixed(2)}</td>
            <td onclick ="add(${i},1)">+</td>
            <td onclick ="add(${i},-1)">-</td>
            </tr>`
            total+= p.qt*p.valor
            pedido+= `${p.nome} ${p.qt}x${p.valor} = ${(p.valor*p.qt)}\n`
        }
    }
    tbody.innerHTML+=`
    <tr>
        <td colspan ="3" color: white> Valor Total</td>
        <td colspan ="3">${total.toFixed(2)}</td>
    </tr>`

    pedido+=`Total = ${total.toFixed(2)}\n`
}

function add(i, valor){
    lsProdutos[i].qt += valor
    atualizarTb()
    if(lsProdutos[i].qt == 0){
        document.querySelectorAll(".produto")[i].dispatchEvent (new Event("click"))
    }
    const qt = lsProdutos.filter(p => p.qt >= 1)
    if(qt == ""){
        produtos.classList.toggle("ocultar")
        divCarrinho.classList.toggle("ocultar")
        atualizarTb()
    }
}
const frm = document.querySelector("form")
frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const nome = frm.inNome.value
    let msg = "Deseja fazer o seguinte pedido!\n"
    msg+=pedido
    msg+=`Att: ${nome}`
    if (confirm("Deseja enviar essa mensagem?\n"+msg)){
        msg = encodeURI(msg)
        const link = `https://wa.me/559198995584?text=${msg}`
        window.open(link,'_blank')
    }
})