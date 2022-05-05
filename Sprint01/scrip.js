const submit = document.querySelector('#submit')
const cancel = document.querySelector('#cancel')
let textarea = document.querySelector('#input-text')
let outputText = document.querySelector('#res')
let endTexy;
let inputText = textarea.value
submit.addEventListener('click', criptografar)

function criptografar() {

    inputText =textarea.value.toLowerCase()

    let cripto01 = inputText.replace(/a/g, 'ai')

    let cripto02 = cripto01.replace(/e/g, 'enter')

    let cripto03 = cripto02.replace(/i/g, 'imis')

    let cripto04 = cripto03.replace(/o/g, 'ober')

    let cripto05 = cripto04.replace(/u/g, 'ufat')

    

    print(endTexy)

    
return  endTexy = cripto05;
}


console.log(endTexy);

function print(content) {
    textarea.value = ''
    outputText.innerHTML = `
    <p>${content}</p>
    `

    return
}

function printReturn(returns) {
    outputText.innerHTML = ''
    textarea.value = returns

    return
}

// function teste(descripto) {
//     alert('aaaaa')
    
//     let textReturn = descripto

//     let cripto01 = textReturn.replace(/ai/g, 'a')

//     let cripto02 = cripto01.replace(/enter/g, 'e')

//     let cripto03 = cripto02.replace(/imis/g, 'i')

//     let cripto04 = cripto03.replace(/ober/g, 'o')

//     let cripto05 = cripto04.replace(/ufat/g, 'u')

//     return printReturn(cripto05)
// }


