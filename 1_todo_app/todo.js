// 할 일 생성
function createTodo() {
    let todoInput = document.getElementById('todo-input')
    let inputText = todoInput.value

    // 빈 칸으로 추가 시 alert 노출
    if (inputText == '') {
        alert('할 일을 입력해 주세요!')
        return false
    }

    // li 추가
    let todoList = document.getElementById('todo-list')
    let newTodo = document.createElement('li')

    // 체크박스 생성
    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.setAttribute('onchange', 'toggleComplete(this)')

    // div 생성
    let div = document.createElement('div')

    // 할 일 텍스트 span 생성
    let todoText = document.createElement('span')
    todoText.className = 'todo-text'
    todoText.innerText = inputText

    // 버튼 그룹 span 생성
    let buttonGroup = document.createElement('span')

    // 수정 버튼 생성
    let editBtn = document.createElement('button')
    editBtn.className = 'btn edit-btn'
    editBtn.innerText = '수정'
    editBtn.setAttribute('onclick', 'editItem(this)')

    // 삭제 버튼 생성
    let deleteBtn = document.createElement('button')
    deleteBtn.className = 'btn delete-btn'
    deleteBtn.innerText = '삭제'
    deleteBtn.setAttribute('onclick', 'deleteItem(this)')

    // 버튼 그룹에 버튼을 추가
    buttonGroup.appendChild(editBtn)
    buttonGroup.appendChild(deleteBtn)

    // div에 텍스트와 버튼 그룹 추가
    div.appendChild(todoText)
    div.appendChild(buttonGroup)

    // li에 체크박스와 div 추가
    newTodo.appendChild(checkbox)
    newTodo.appendChild(div)

    // 리스트에 추가
    todoList.appendChild(newTodo)

    // 입력창 초기화
    todoInput.value = ''
}

// '='는 a에 b를 갖다 넣어라, '=='는 a랑 b랑 같냐?, '!='는 a랑 b랑 틀리냐?

// 할 일 삭제
function deleteItem(button) {
    // closest: 부모 방향으로 거슬러 올라가며 매개변수로 전달한 'li' 태그를 찾는다. 가장 먼저 발견된 항목 하나를 반환한다.
    let li = button.closest('li')
    li.remove()
}

// 할 일 수정
function editItem(button) {

    let li = button.closest('li')

    // querySelector: css 선택자 문법으로 HTML에서 하나의 요소를 찾아주는 함수이다. 조건에 맞는 첫 번째 요소 하나만 가져온다.
    let textSpan = li.querySelector('.todo-text')

    let newText = prompt('할 일을 수정하세요.', textSpan.textContent)

    // 버전 1
    if (newText == null) {
        alert('수정할 내용을 입력해 주세요!')
        return false
    }

    if (newText.trim() == '') {
        alert('수정할 내용을 입력해 주세요!')
        return false
    }
    textSpan.textContent = newText.trim()

    // // 버전 2
    // if (newText != null && newText.trim() != '') {
    //     textSpan.textContent = newText.trim()
    // } else {
    //     alert('수정할 내용을 입력해 주세요!')
    //     return false
    // }
}

// 할 일 완료
function toggleComplete(checkbox) {
    let text = checkbox.nextElementSibling
    // toggle('on, off 되는 클래스명', 조건)
    // checkbox가 checked되면 completed 클래스를 추가해줘
    text.classList.toggle('completed', checkbox.checked)
}