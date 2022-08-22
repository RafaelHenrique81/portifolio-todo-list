const form = document.querySelector('.form-add-todo')
const search = document.querySelector('.form-search')
const container = document.querySelector('.todos-container')


form.addEventListener('submit',(event) => {
    event.preventDefault()

    if(event.target.add.value.trim().length){
        container.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${event.target.add.value.trim()}">
            <span>${event.target.add.value.trim()}</span>
            <i class="far fa-trash-alt" data-trash="${event.target.add.value.trim()}"></i>
        </li>`
    }
    event.target.reset()
})

search.addEventListener('submit',(event) => {
    event.preventDefault()
})

container.addEventListener('click', event => {
    const clickedElement = event.target

    if(clickedElement.dataset.trash) {
        document.querySelector(`[data-todo="${clickedElement.dataset.trash}"]`).remove()
    }
})

search.addEventListener('input', event => {
    const inputValue = event.target.value.trim().toLowerCase()

    Array.from(container.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(inputValue))
        .forEach(todo => {
            todo.classList.remove('d-flex')
            todo.classList.add('hidden')
        })
        
    Array.from(container.children)
        .filter(todo => todo.textContent.toLowerCase().includes(inputValue))
        .forEach(todo => {
            todo.classList.remove('hidden')
            todo.classList.add('d-flex')
    })
        
})