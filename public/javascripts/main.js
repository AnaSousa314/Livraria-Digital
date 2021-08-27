

let preco = document.querySelectorAll('.preco');
let total = document.getElementById('total');
let qtd = document.querySelectorAll('.qtd');
let produto = document.querySelectorAll('.produto');




let qtmenos = document.querySelectorAll('.qtmenos');
let qtmais = document.querySelectorAll('.qtmais');

let tot = document.querySelectorAll('.tot');

let soma = 0;
let teste = 0;

// window.addEventListener('load',function(){
//   localStorage.setItem('pagar', soma);
// })

tot.forEach(item=>{
  soma += Number(item.value)
})

total.value = soma

for (let i = 0; i < qtmenos.length; i++) {
  qtmenos[i].addEventListener('click',function(){
    if(parseInt(qtd[i].value) > 1 ){
      qtd[i].value = qtd[i].value - 1;
      tot[i].value = (preco[i].value * qtd[i].value).toFixed(2);

      soma = 0
      tot.forEach(item=>{
        soma += Number(item.value)
      })
      console.log(soma)

      total.value = soma;
    }
    console.log(total.value)
    localStorage.setItem('pagar', soma);
   localStorage.setItem(`qtd${i}`,tot[i].value);

  })
  teste = total.value;
}

for (let i = 0; i < qtmais.length; i++) {
  
  qtmais[i].addEventListener('click',function(){
    qtd[i].value = parseInt(qtd[i].value) + 1;
    tot[i].value = (preco[i].value * qtd[i].value).toFixed(2);

    soma = 0
    tot.forEach(item=>{
      soma += Number(item.value)
    })
    console.log(soma)
    total.value = soma;

    localStorage.setItem('pagar', soma);
    localStorage.setItem(`qtd${i}`,tot[i].value);

  })

teste = localStorage.getItem('pagar');
  
}

console.log(teste)



teste = localStorage.getItem('pagar');
console.log(teste)
// (function (){
//   'use strict';

//   let pagar = document.querySelector('#pagar');

//   function setLocalStorage(){
//      pagar.addEventListener('click', () => {
//       localStorage.setItem('nome','Jack Sparrow')
//     })
//   }
//   setLocalStorage()

// }());

