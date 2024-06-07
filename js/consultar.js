let listaDeFeedBacks = []

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

    listaDeFeedBacks.push(item)
    console.log(listaDeFeedBacks)
})
