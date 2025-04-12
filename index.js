let menuToggle = document.getElementById('menu-toggle')
let navLinks = document.getElementById('navLinks')

// addEventListener: 추가해라 이벤트를 듣는 놈을
menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active')
})