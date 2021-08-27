let pagar = document.querySelector('#pagar');
let tots = document.querySelectorAll('.tots')

window.addEventListener('load',function(){
  pagar.innerText = localStorage.getItem('pagar');

  for (let i = 0; i < tots.length; i++) {
    tots[i].innerHTML = localStorage.getItem(`qtd${[i]}`);
    
  }

});

