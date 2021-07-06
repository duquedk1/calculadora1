const btNum=document.getElementsByName('dNum')
const btOp=document.getElementsByName('dOpe')
const btIgual=document.getElementsByName('dIgual')[0]
const btBorrar=document.getElementsByName('dBorrar')[0]
let result=document.getElementById('resultado')
let opeActual=''
let opeAnt=''
let operation=''
//console.log(botonNum)
//console.log(btIgual)
//console.log(btBorrar)
//console.log(result)

btNum.forEach(function(boton){
    boton.addEventListener('click', function(){
        addNum(boton.innerText)
        //alert(boton.innerText)
    })
})

btOp.forEach(function(boton){
    boton.addEventListener('click', function(){
        selectOperation(boton.innerText)
        //alert(boton.innerText)
    })
})

btIgual.addEventListener('click',function(){
    calcular()
    updateDisplay()
})

btBorrar.addEventListener('click',function(){
    clear()
    updateDisplay()
})

function selectOperation(op){
    if(opeActual === '')return
    if(opeAnt !== ''){
        calcular()
    }
    operation = op.toString()
    opeAnt = opeActual;
    opeActual = ''
}

function calcular(){
    let calculo
    const ant=parseFloat(opeAnt)
    const act=parseFloat(opeActual)
    if(isNaN(ant) || isNaN(act)) return
    switch(operation){
        case '+':
            calculo=ant+act
            break
        case '-':
            calculo=ant-act
            break
        case 'x':
            calculo=ant*act
            break
        case '/':
            calculo=ant/act
            break
        default:
            return
    }
    opeActual=calculo
    operation=undefined
    opeAnt=''
}

function addNum(num){
    opeActual=opeActual.toString() +num.toString()
    updateDisplay()
}

function clear(){
    opeActual=''
    opeAnt=''
    operation= undefined
}

function updateDisplay(){
    result.value=opeActual
}