const submit = document.querySelector('#submit')
const cancel = document.querySelector('#cancel')
let textarea = document.querySelector('#input-text')
let outputText = document.querySelector('#res')
let inputText = textarea.value
submit.addEventListener('click', criptografar)
cancel.addEventListener('click', descriptografar)
document.querySelector('#copy').onclick = copy

function criptografar() {

    inputText = textarea.value.toLowerCase()

    let cripto01 = inputText.replace(/a/g, 'ai')

    let cripto02 = cripto01.replace(/e/g, 'enter')

    let cripto03 = cripto02.replace(/i/g, 'imis')

    let cripto04 = cripto03.replace(/o/g, 'ober')

    let cripto05 = cripto04.replace(/u/g, 'ufat')

    inputText = cripto05
    print(inputText)
    return
}

function print(content) {
    outputText.innerHTML = `
    <p>${content}</p>
    `
    return
}

function descriptografar() {

    inputText = textarea.value.toLowerCase()

    let descripto01 = inputText.replace(/ai/g, 'a')

    let descripto02 = descripto01.replace(/enter/g, 'e')

    let descripto03 = descripto02.replace(/imis/g, 'i')

    let descripto04 = descripto03.replace(/ober/g, 'o')

    let descripto05 = descripto04.replace(/ufat/g, 'u')

    inputText = descripto05
    print(inputText)
    return
}
function copy (){
   outputText.execCommand('copy')
}


