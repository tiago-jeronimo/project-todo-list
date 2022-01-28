// const creatBtnDelet = document.createElement('button');
    // creatBtnDelet.classList.add('.btnDelet');
    // creatBtnDelet.innerText=""
    // criaItemLista.appendChild(creatBtnDelet)



const inputTextoTarefa = document.querySelector('#texto-tarefa');
const btnCriarTarefa = document.querySelector('#criar-tarefa');
const itemList = document.getElementsByClassName('.item-lista');
const listaDeTarefas = document.getElementById('lista-tarefas') ;
const btnApagaTudo = document.getElementById('apaga-tudo');
const btnApagaFinalizados = document.getElementById('remover-finalizados');
const btnSalvaTarefas = document.getElementById('salvar-tarefas');
const btnRemove = document.getElementById('remover-selecionado')

btnCriarTarefa.addEventListener('click', addTodo);

function addTodo(){
    const listTodo = document.querySelector('#lista-tarefas');
    const criaItemLista = document.createElement('li')
    criaItemLista.classList.add('item-lista');
    criaItemLista.innerText = inputTextoTarefa.value;
    inputTextoTarefa.value=''
    listTodo.appendChild(criaItemLista);
}

listaDeTarefas.addEventListener('click', mudaCor)

function mudaCor(event) {
    if(event.target.tagName ==='LI'){
        for(let i=0; i<listaDeTarefas.children.length; i+=1){
            listaDeTarefas.children[i].style.backgroundColor=""
        }
        event.target.style.backgroundColor="rgb(128, 128, 128)"
    }
}

function tarefaFeita(evento){
    evento.target.classList.toggle('completed');
}
listaDeTarefas.addEventListener('dblclick', tarefaFeita);


function apagaTudo(evento){
    listaDeTarefas.innerHTML=''
} 
btnApagaTudo.addEventListener('click', apagaTudo);


function apagaFinalizados(event){
    const finalizados = document.querySelectorAll('.completed')
    for(let i=0; i<finalizados.length; i+=1){
        listaDeTarefas.removeChild(finalizados[i])
    }
}
btnApagaFinalizados.addEventListener('click', apagaFinalizados);


const salvaTarefas = (event) => {
    localStorage.setItem('Itens Salvos', listaDeTarefas.innerHTML);
}

window.onload=() => {
    const salvos = localStorage.getItem('Itens Salvos')
    listaDeTarefas.innerHTML=salvos
}
btnSalvaTarefas.addEventListener('click', salvaTarefas);

function removeIntem(evento){
    for(let i=0; i<listaDeTarefas.children.length; i+=1){
        if(listaDeTarefas.children[i].style.backgroundColor==='rgb(128, 128, 128)'){
            listaDeTarefas.removeChild(listaDeTarefas.children[i]);
        }
    }
}
btnRemove.addEventListener('click', removeIntem)