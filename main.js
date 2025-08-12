'use strict'

import funcionarios from "./funcionarios.json" with{type: "json"}

    function criarConteudo(conteudo){
        const funcionario = document.getElementById('funcionario')
        const container = document.createElement('div')
        const img = document.createElement('img')
        const nome = document.createElement('h1')
        const cargo = document.createElement('p')

        img.src = ('./img/' + conteudo.imagem)
        nome.textContent = conteudo.nome
        cargo.textContent = conteudo.cargo

        funcionario.appendChild(container)
        container.classList.add('container')
        container.appendChild(img)
        funcionario.classList.add('funcionario')
        img.classList.add('imagem')

        document.documentElement.style.setProperty('--nome', container.appendChild(nome))
        document.documentElement.style.setProperty('--cargo', container.appendChild(cargo))
    }

    function carregarConteudos(){
        const conteudos = funcionarios

        conteudos.forEach(criarConteudo)
    }

    carregarConteudos()