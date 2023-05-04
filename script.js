senha = document.getElementById("senha")
btn = document.getElementById("btn")
mensagem = document.getElementById("mensagem")
login = document.getElementById("login")


btn.addEventListener("click", function(evento){
    evento.preventDefault()
    if(senha.value.length < 4){
        senha.classList.add("invalida")
        mensagem.innerHTML = "Logado ou senha incorretos"
        mensagem.classList.add("mensagem-erro")
    }else{
        senha.classList.remove("invalida")
        mensagem.classList.add= ("memsagem-sucesso")
        mensagem.classList.remove("mensagem-erro")
        mensagem.innerHTML = "Cadastrado com sucesso"

    }
})


