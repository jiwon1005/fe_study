function createTodo() {
    let todoInput = document.getElementById ('todo-input')
    let inputText = todoInput.value

    if (inputText == '') {
        alert('할 일을 입력해 주세요!')
        return false
    }

    let todoList = document.getElementById('todo-list')
    let newTodo = document.createElement('li')
    newTodo.innerText = inputText

    todoList.appendChild(newTodo)

    todoInput.value = ''
}