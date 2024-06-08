//Lista dos feedbacks
let listaDeFeedBacks = []

//Funcionalidade que guardas os dados do formulario
const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const inputNome = document.querySelector('[data-nome]').value
    const poluicaoSelect = document.querySelector('[data-poluicao]').value
    const condicaoSelect = document.querySelector('[data-condicao]').value
    const qualidadeSelect = document.querySelector('[data-qualidade]').value
    
    const inputsImagens = document.querySelectorAll('[data-imagem]')
    let imagens = [];
    
    inputsImagens.forEach(imagem => {
        if (imagem.value) {
            imagens.push(imagem.value)
        }
    })
    console.log(imagens)
    
    const dataAtual = new Date();
    const dataFormatada = `Data e Hora: ${dataAtual.toLocaleDateString()}, ${dataAtual.toLocaleTimeString()}`
    
    const item = {
        id: listaDeFeedBacks.length,
        nome: inputNome,
        imagem: imagens,
        horario: dataFormatada,
        poluicao: poluicaoSelect,
        condicao: condicaoSelect,
        qualidade: qualidadeSelect,
    }

    listaDeFeedBacks.unshift(item)
    exibirNaTela(listaDeFeedBacks)
    console.log(listaDeFeedBacks)
})

//Funcao para exibira os elementos na tela
function exibirNaTela(lista) {
    const exibir = document.querySelector('.exibir-praias')
    exibir.innerHTML = ''
    lista.forEach(objeto => {
        exibir.appendChild(criarElemento(objeto))
    })
}

//Funcao que criar um elemento dinamicamente
function criarElemento(objeto) {
    let idx = 0;
    
    const novoObjeto = document.createElement('div')
    novoObjeto.setAttribute('data-id', objeto.id)
    novoObjeto.classList.add("objeto-carrosel")
    
    //Nome da praia
    const novoNome = document.createElement('h2')
    novoNome.textContent = objeto.nome
    novoObjeto.appendChild(novoNome)
    
    //Div do carrosel
    const novoDivCarrosel = document.createElement('div')
    novoDivCarrosel.classList.add("carrosel")
    novoObjeto.appendChild(novoDivCarrosel)
    
    if (objeto.imagem.length > 1) {
        const btnVoltar = document.createElement('button')
        btnVoltar.setAttribute('id', 'prev-img')
        btnVoltar.textContent = '<'
        novoDivCarrosel.appendChild(btnVoltar)
        
        btnVoltar.addEventListener('click', () => {
            idx--
            if (idx < 0) {
                idx = objeto.imagem.length - 1
            }
            carrosel(idx, objeto.id, objeto.imagem)
        })
    }
    
    //Div do container das imagens
    const novaDivContainerImagens = document.createElement('div')
    novaDivContainerImagens.classList.add("container-carrosel")
    novoDivCarrosel.appendChild(novaDivContainerImagens)
    
    //Div do container das imagens
    const novaDivImagens = document.createElement('div')
    novaDivImagens.classList.add("container-images")
    novaDivImagens.classList.add(`container-images${objeto.id}`)
    novaDivImagens.setAttribute('id', 'images')
    novaDivContainerImagens.appendChild(novaDivImagens)
    
    //Imagens
    for (i = 0; i < objeto.imagem.length; i++) {
        const novaImagem = document.createElement('img');
        novaImagem.setAttribute('src', objeto.imagem[i]);
        novaDivImagens.appendChild(novaImagem)
    }
    
    if (objeto.imagem.length > 1) {
        const btnAvancar = document.createElement('button')
        btnAvancar.setAttribute('id', 'next-img')
        btnAvancar.textContent = '>'
        novoDivCarrosel.appendChild(btnAvancar)
        
        btnAvancar.addEventListener('click', () => {
            idx++
            if (idx > objeto.imagem.length - 1) {
                idx = 0;
            }
            carrosel(idx, objeto.id, objeto.imagem)
        })
    }
    
    //Nivel de poluicao
    const novaPoluica = document.createElement('p')
    novaPoluica.innerHTML = `Nivel de poluição: ${objeto.poluicao}`
    novoObjeto.appendChild(novaPoluica)

    //Condicao da praia
    const novaCondicao = document.createElement('p')
    novaCondicao.innerHTML = `Condição da praia: ${objeto.condicao}`
    novoObjeto.appendChild(novaCondicao)

    //Qualidade das aguas
    const novaQualidade = document.createElement('p')
    novaQualidade.innerHTML = `Qualidade da agua: ${objeto.qualidade}`
    novoObjeto.appendChild(novaQualidade)
    
    //Horario
    const novoHorario = document.createElement('p');
    novoHorario.textContent = objeto.horario
    novoObjeto.appendChild(novoHorario)

    //Div do container dos botoes
    const novaDivBtns = document.createElement('div')
    novaDivBtns.classList.add("container-btns")
    novoObjeto.appendChild(novaDivBtns)
    
    //Btn Editar
    const btnEditar = document.createElement('button');
    btnEditar.innerHTML = '<i class="fas fa-edit"></i> Editar'
    btnEditar.classList.add('btn-consulta')
    novaDivBtns.appendChild(btnEditar)
    
    btnEditar.addEventListener('click', () => {
        atualizarNome(objeto.id)
    })
    
    //Btn Deletar
    const btnDeletar = document.createElement('button');
    btnDeletar.innerHTML = '<i class="fa-solid fa-eraser"></i> Deletar'
    btnDeletar.classList.add('btn-consulta')
    novaDivBtns.appendChild(btnDeletar)
    
    btnDeletar.addEventListener('click', () => {
        deletarObjeto(objeto.id)
    })
    
    return novoObjeto
}

//Funcionalidade do alterar o nome da praia do feedback
function atualizarNome(id) {
    const novoNome = prompt("Digite o novo da praia:");
    
    if (novoNome) {
        const objeto = listaDeFeedBacks.find(objetoEncontrado => objetoEncontrado.id == id)
        
        if (objeto) {
            objeto.nome = novoNome;
            console.log(objeto.nome)
            exibirNaTela(listaDeFeedBacks); 
        }
    }
    else {
        alert("Digite um texto válido!");
    }
}

//Funcionalidade do deletar o feedback
function deletarObjeto(id) {
    if (confirm("Deseja realmente excluir esse feedback?")) {
        listaDeFeedBacks = listaDeFeedBacks.filter(lista => lista.id != id);
        exibirNaTela(listaDeFeedBacks)
    }
}

//Funcionalidade do carrosel das imagens
function carrosel(idx, indece) {
    const carroselImgs = document.querySelector(`.container-images${indece}`)
    carroselImgs.style.transform = `translateX(${-idx * 500}px)`
}


//Funcionalidade de pesquisar pelas feedbacks
const botaoPesquisa = document.querySelector('[data-botaoPesquisa]')

botaoPesquisa.addEventListener('click', () => {
    const inputPesquisa = document.querySelector('[data-pesquisa]')

    if (inputPesquisa.value != '') {
        listaFiltrado = listaDeFeedBacks.filter(lista => lista.nome == inputPesquisa.value)
        exibirNaTela(listaFiltrado)
    }
    else {
        exibirNaTela(listaDeFeedBacks)
    }
})
