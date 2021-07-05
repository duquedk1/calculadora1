const btNum=document.getElementsByName('dNum')
const btOp=document.getElementsByName('dOpe')
const btIgual=document.getElementsByName('dIgual')[0]
const btBorrar=document.getElementsByName('dBorrar')[0]
let result=document.getElementById('resultado')
//console.log(botonNum)
//console.log(btIgual)
//console.log(btBorrar)
//console.log(result)

btNum.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText)
        //alert(boton.innerText)
    })
})

btOp.forEach(function(boton){
    boton.addEventListener('click', function(){
        selecOperation(boton.innerText)
        //alert(boton.innerText)
    })
})

btIgual.addEventListener('click',function(){
    calc()
    actuaDisplay()
})

btIgual.addEventListener('click',function(){
    clear()
    actuaDisplay()
})