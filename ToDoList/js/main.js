var myTasks = []

function addTask(){
    var task = document.getElementById("inputTask").value.trim()
    if(task.length === 0) {
        alert('please input at least a letter')
    }
    else {
        var ul = document.getElementById("myTasks")
        if(myTasks.length < 10) {
            myTasks.push(task)
            var li = document.createElement('li')
            var text = document.createElement('span')
            var check = document.createElement("button")
            text.innerHTML = task
            check.className = "cekBut"
            check.innerHTML = "&check;"
            check.setAttribute("onclick", "complete(this)")
            li.appendChild(check)
            var erase = document.createElement("button")
            erase.className = "delBut"
            erase.innerHTML = "&#x2715;"
            erase.setAttribute("onclick", "remove(this)")
            var span = document.createElement("span")
            span.innerText = ' DONE'
            span.style.display = 'none'
            li.appendChild(erase)
            li.appendChild(text)
            li.appendChild(span)
            ul.appendChild(li)
            reset()
        }
        else {
            alert('max tasks is 10')
        }
    }
}

function reset(){
    document.getElementById("inputTask").value = ''
}

function enter () {
    var input = document.getElementById('inputTask')
    input.onkeydown = function (key) {
        if(key.keyCode === 13) {
            addTask()
        }
    }
}

function complete(task) {
    task.parentElement.children[2].style.textDecoration = (task.parentElement.children[2].style.textDecoration === '') ? "line-through" : ''
    task.parentElement.children[3].style.display = (task.parentElement.children[3].style.display === 'none') ? 'inline' : 'none'
}

function remove(task) {
    myTasks.pop()
    var markLi = task.parentElement
    var markUl = markLi.parentElement
    markUl.removeChild(markLi)
}

function clearList(){ 
    var ul = document.getElementById('myTasks')
    ul.innerHTML = ''
    myTasks = []
}
