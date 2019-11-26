document.querySelector('.add-todo').addEventListener('click', function(){
    newLi = document.createElement('li')
    result = document.querySelector('.todo-input').value
    document.querySelector('.todo-list').appendChild(newLi).innerText = result
    refresh()
})

const refresh = function () {
    document.querySelector('.todo-input').value = ''
}



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

// let list = Array.from(document.querySelectorAll('li'))

// document.querySelector('.remove-todo').addEventListener('click', function(){

//     const listWithLis = document.querySelector('#todo-list')
    
//     while (listWithLis.hasChildNodes()){

//         listWithLis.removeChild(listWithLis.firstChild);

//     }
// })

