const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefa = document.querySelector('.tarefas');

function criaLi(){
    const li = document.createElement('li');
    return li;
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.aappendChild(li);
}

btnTarefa.addEventListener('click', function(e) {
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});