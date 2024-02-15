let ul = document.querySelector("#list")

fetch('http://localhost:3000/').then((resposta)=>{
    resposta.json().then((data)=>{
        for (let i = 0; i < data.length; i++) {
            let li = document.createElement("li")
            li.innerHTML=data[i]
            ul.appendChild(li)
        }
    })
})

document.querySelector("#bnt").addEventListener('click', ()=>{
    let texto = document.querySelector("#texto")
    fetch(`http://localhost:3000/${texto.value}`).then((resposta)=>{
        resposta.json().then((data)=>{
            if (data == 'O nome existe') {
                alert('O nome existe')
            }
            else if (data == 'O nome não existe') {
                alert('O nome não existe')
            }
            else if (data == 'Erro ao processar a requisição') {
                alert('Erro ao processar a requisição')
            }
        })
    })
})