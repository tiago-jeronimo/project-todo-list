const inputTextoTarefa = document.querySelector('#texto-tarefa');
const btnCriarTarefa = document.querySelector('#criar-tarefa');
const itemList =document.querySelector('.item-lista');
const btnDelet = document.querySelector('.btnDelet')

btnCriarTarefa.addEventListener('click', addTodo);

function addTodo(){
    event.preventDefault()
    const listTodo = document.querySelector('#lista-tarefas');
    const criaItemLista = document.createElement('li')
    criaItemLista.classList.add('item-lista');
    criaItemLista.innerText = inputTextoTarefa.value;
    inputTextoTarefa.value=''
    listTodo.appendChild(criaItemLista);

    const creatBtnDelet = document.createElement('button');
    creatBtnDelet.classList.add('.btnDelet');
    creatBtnDelet.innerText=""
    criaItemLista.appendChild(creatBtnDelet)

    
}

console.log(btnDelet)