document.querySelector('.add-todo').addEventListener('click', function(){
    newLi = document.createElement('li')
    result = document.querySelector('.todo-input').value
    document.querySelector('.todo-list').appendChild(newLi).innerText = result
    })

    // document.querySelector('.add-todo').addEventListener('click', function(){
    //     document.querySelector('.todo-list').appendChild(document.createElement('li')).innerText = document.querySelector('.todo-input').value
    //     })

// document.querySelector('.add-todo').addEventListener('click', function(){
//     newLi = document.createElement('li')
//     result = document.querySelector('.todo-input').value
//     document.querySelector('.todo-list').appendChild(newLi).innerText = result
//     })

document.querySelector('.remove-todo').addEventListener('click', function(){
    
    document.querySelector(`.todo-list li:nth-child(${document.querySelector('.index-input').value}`).remove();
})

let list = Array.from(document.querySelectorAll('ul li'))

