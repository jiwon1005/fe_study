function createTodo() {
    let todoInput = document.getElementById ('todo-input')
    let inputText = todoInput.value

    let todoList = document.getElementById('todo-list')
    let newTodo = document.createElement('li')
    newTodo.innerText = inputText

    todoList.appendChild(newTodo)

}