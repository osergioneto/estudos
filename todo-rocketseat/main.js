var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var toDos = JSON.parse(localStorage.getItem('list_toDos'));

function renderToDos() {
    listElement.innerHTML = '';

    for(toDo of toDos){
        var toDoElement = document.createElement('li');
        var toDoText = document.createTextNode(toDo);

        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');
        linkElement.setAttribute('href', '#');
        linkElement.appendChild(linkText);
        
        //Pegando a posição do item no arrya e adicionando a propriedade onclick
        var pos = toDos.indexOf(toDo);
        linkElement.setAttribute('onclick', 'deleteToDo(' + pos + ')');

        toDoElement.appendChild(toDoText);
        toDoElement.appendChild(linkElement);

        listElement.appendChild(toDoElement);
    }
}

renderToDos();

function addToDo() {
    var toDoText = inputElement.value;

    toDos.push(toDoText);
    inputElement.value = '';
    renderToDos();
    saveToDo();
}

function deleteToDo(pos) {
    toDos.splice(pos, 1);
    renderToDos();
    saveToDo();
}

function saveToDo() {
    localStorage.setItem('list_toDos', JSON.stringify(toDos));
}

buttonElement.onclick = addToDo;  