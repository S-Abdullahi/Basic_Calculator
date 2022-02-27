document.querySelector('#one').addEventListener('click', keyOne)
document.querySelector('#two').addEventListener('click', keyTwo)
document.querySelector('#three').addEventListener('click', keyThree)
document.querySelector('#four').addEventListener('click', keyFour)
document.querySelector('#five').addEventListener('click', keyFive)
document.querySelector('#six').addEventListener('click', keySix)
document.querySelector('#seven').addEventListener('click', keySeven)
document.querySelector('#eight').addEventListener('click', keyEight)
document.querySelector('#nine').addEventListener('click', keyNine)
document.querySelector('#zero').addEventListener('click', keyZero)
document.querySelector('#add').addEventListener('click', keyAdd)
document.querySelector('#minus').addEventListener('click', keyMinus)
document.querySelector('#multi').addEventListener('click', keyMulti)
document.querySelector('#divide').addEventListener('click', keyDivide)
document.querySelector('#equal').addEventListener('click', keyEqual)
document.querySelector('#clear').addEventListener('click', keyClear)

function keyOne(){
    document.querySelector('#screen').value += "1"
}

function keyTwo(){
    document.querySelector('#screen').value += '2'
}

function keyThree(){
    document.querySelector('#screen').value += '3'
}

function keyFour(){
    document.querySelector('#screen').value += '4'
}

function keyFive(){
    document.querySelector('#screen').value += '5'
}

function keySix(){
    document.querySelector('#screen').value += '6'
}

function keySeven(){
    document.querySelector('#screen').value += '7'
}

function keyEight(){
    document.querySelector('#screen').value += '8'
}

function keyNine(){
    document.querySelector('#screen').value += '9'
}

function keyZero(){
    document.querySelector('#screen').value += '0'
}

function keyAdd(){
    document.querySelector('#screen').value += '+'
}

function keyMulti(){
    document.querySelector('#screen').value += '*'
}

function keyDivide(){
    document.querySelector('#screen').value += '/'
}

function keyMinus(){
    document.querySelector('#screen').value += '-'
}

function keyEqual(){
    let problem = document.querySelector('#screen').value
    document.querySelector('#answer').value = eval(problem)
}
function keyClear(){
    document.querySelector('#screen').value = ''
    document.querySelector('#answer').value = '0'
}
