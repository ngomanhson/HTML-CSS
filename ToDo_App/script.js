const input = document.querySelector('input')
const btnAdd = document.querySelector('.add')
const btnClear = document.querySelector('.clear')
const display_add = document.querySelector('.added span')
const display_remove = document.querySelector('removed span')
const listRendered = []
var amountAdd = 0
var amountDelete = 0
var edit = false
var listTasks = []
var value = ''
var idEdit = -1
input.addEventListener('keyup', function(e){
    value = e.target.value
})
btnAdd.addEventListener('click', function(e){
    e.preventDefault()
    if(edit == false){
        if(value.length > 0){
            const newTask = {
                title: value,
                id: Math.floor(Math.random() * 999999999),
            }
            listTasks.push(newTask)
            renderElement()
            input.value = ''
            amountAdd++
            display_add.textContent = `(${amountAdd})`
            // console.log(display_add)
        }
    }
    if(edit == true){
        listTasks.forEach((e) => {
            if(e.id == idEdit){
                e.title = value
                renderElement()
                input.value = ''
                edit = false
                btnAdd.textContent = 'Add'
            }
        })
    }
})

function renderElement(){
    const lists = document.querySelector('.list-tasks')
    if(listTasks.length > 1){
        const items = document.querySelectorAll(".item")
        items.forEach((e) => {
            e.remove()
        })
        listTasks.forEach((e) => {
            if(e.id != undefined){
                const item = document.createElement('div')
                item.classList.add('item')
                item.setAttribute('id', e.id)
                const p = document.createElement('p')
                p.textContent = e.title
                const actions = document.createElement('div')
                actions.classList.add('action')   
                const deleteButton = document.createElement('i')
                deleteButton.className = 'fa fa-trash'
                const editButton = document.createElement('i')
                editButton.className = 'fas fa-edit'
                actions.appendChild(deleteButton) 
                actions.appendChild(editButton) 
                item.appendChild(p)
                lists.appendChild(item)
                item.appendChild(p)
                item.appendChild(actions)
                deleteButton.addEventListener('click', function(){
                    const elementDelete = this.parentElement.parentElement
                    elementDelete.remove()
                    console.log(listTasks.length, listTasks)
                    for(let i=0; i<listTasks.length; i++){
                        if(listTasks[i].id == elementDelete.getAttribute('id')){
                            listTasks[i] = {}
                            amountDelete++
                            display_remove.textContent = `($(amountDelete))`
                            console.log('Deleted')
                        }
                    }
                })
                editButton.addEventListener('click', function(){
                    edit = true
                    const itemEdit = this.parentElement.parentElement
                    btnAdd.textContent = 'Edit'
                    input.value = itemEdit.firstChild.textContent
                    idEdit = item.getAttribute('id')
                })
            }
        })
    }else{
        //render du lieu
        if(listTasks[0].id != undefined){
            const item = document.createElement('div')
            item.classList.add('item')
            item.setAttribute('id', listTasks[0].id)
            const p = document.createElement('p')
            p.textContent = listTasks[0].title
            const actions = document.createElement('div')
            actions.classList.add('action')
            const deleteButton = document.createElement('i')
            deleteButton.className = 'fas fa-trash'
            const editButton = document.createElement('i')
            editButton.className = 'fas fa-edit'
            actions.appendChild(deleteButton)
            actions.appendChild(editButton)
            item.appendChild(p)
            lists.appendChild(item)
            item.appendChild(p)
            item.appendChild(actions)
            deleteButton.addEventListener('click', function(){
                this.parentElement.parentElement.remove()
                listTasks[0] = {}
            })
            editButton.addEventListener('click', function(){
                const itemEdit = this.parentElement.parentElement
                edit = true
                btnAdd.textContent = 'Edit'
                input.value = itemEdit.firstChild.textContent
                idEdit = item.getAttribute('id')
            })
        }
    }
}

btnClear.addEventListener('click', function(){
    listTasks = []
    const items = document.querySelectorAll('.item')
    items.forEach((e) => {
        e.remove()
    })
})