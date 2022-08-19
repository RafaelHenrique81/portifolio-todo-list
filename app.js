const form = document.querySelector('.form-add-todo')
const search = document.querySelector('.form-search')
const container = document.querySelector('.todos-container')


form.addEventListener('submit',(event) => {
    event.preventDefault()

    if(event.target.add.value.length){
        container.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${event.target.add.value.trim()}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>`
        
        // event.target.add.value.trim()
        // console.log(event.target.add.value.trim())

    }
    event.target.reset()
})

search.addEventListener('submit',(event) => {
    event.preventDefault()
})
