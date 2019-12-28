var numberReady = false
var dataReady = false
var box = document.getElementsByClassName("box")
var pick = document.getElementById("select")
var by = document.getElementById("by")
var selectedType = pick.options[pick.selectedIndex].value;
var selectedSortBy = by.options[by.selectedIndex].value;
var rows = document.getElementById("row")
var speed = 1000/document.getElementById('speed').value
var run = 1
var selectColor = 'blue'
var doneColor = 'yellow'
var unselectColor = 'white'
function generate(){
  run = 1
  var amount = document.getElementById("datas").value
  var max = Number(document.getElementById("max").value)
  var min = Number(document.getElementById("min").value) 
  if(box.length !== 0) {
    rows.innerHTML = ''
  }
  if(max <= min) {
      alert("max must greater than min")
  }
  else {
    for(let i = 0; i < amount; i++){
      newRow = document.createElement("div")
      newRow.setAttribute("class", "box")
      rows.appendChild(newRow)
      box[i].innerHTML = Math.floor(Math.random()*(max-min+1)) + min 
      newRow.style.height = 20 + Math.abs(box[i].innerHTML*20) + 'px'
      if(String(max).length > String(min).length) {
        newRow.style.width = Math.abs(String(max).length*10) + 'px'
      }
      else {
        newRow.style.width = Math.abs(String(min).length*10) + 'px'
      }
    }
    numberReady = true
    dataReady = true
  }
}

function sorting() {
    if(!numberReady || !dataReady) {
        alert("please generate data")
    }
    else {
        if(selectedType === "bubble" && selectedSortBy === "ascending") {
          bubbleSort('>')
        }
        else if(selectedType === "bubble" && selectedSortBy === "descending") {
          bubbleSort('<')
        }
        else if(selectedType === "selection" && selectedSortBy === "ascending") {
          selectionSort('>')
        }
        else if(selectedType === "selection" && selectedSortBy === "descending") {
          selectionSort('<')
        }
        else if(selectedType === "insertion" && selectedSortBy === "ascending") {
          insertionSort('>')
        }
        else if(selectedType === "insertion" && selectedSortBy === "descending") {
          insertionSort('<')
        }
    }
}

function bubbleSort(by) {
  if(by === '>') {
    start()
    function start () {
      var count = 0
      var mark = setInterval(sort, speed)
      function sort () {
        if(count < box.length-run) {
          box[count].style.backgroundColor = selectColor
          box[count+1].style.backgroundColor = selectColor
          if(Number(box[count].innerHTML) > Number(box[count+1].innerHTML)) {
            temp = box[count].innerHTML
            box[count].innerHTML =  box[count+1].innerHTML
            box[count+1].innerHTML = temp
            box[count].style.height = 20 + Math.abs(box[count].innerHTML*20) +"px"
            box[count+1].style.height = 20 + Math.abs(box[count+1].innerHTML*20) +"px"
          }
        }
        else {
          clearInterval(mark)
        }   
      }
      var changeC = setInterval(color, speed*2)
      function color () {
        if(count < box.length-run) {
          box[count].style.backgroundColor = unselectColor
          box[count+1].style.backgroundColor = unselectColor
          count++
        }
        else {
          box[box.length-run].style.backgroundColor = doneColor
          clearInterval(changeC)
          run++
          if(run < box.length) {
            var next = false;
            for(let i = 0; i < box.length-1; i++) {
              if(Number(box[i].innerHTML) > Number(box[i+1].innerHTML)) {
                next = true
                break;
              }
            }
            if(next) {
              start()
            }
            else {
              var from = box.length-run
              var done = setInterval(auto, speed)
              function auto() {
                if(0 <= from) {
                  box[from].style.backgroundColor = doneColor
                  from--
                }
                else {
                  clearInterval(done)
                }
              }
            }
          }
        }   
      }
    }
  }
  else{
    start()
    function start () {
      var count = 0
      var mark = setInterval(sort, speed)
      function sort () {
        if(count < box.length-run) {
          box[count].style.backgroundColor = selectColor
          box[count+1].style.backgroundColor = selectColor
          if(Number(box[count].innerHTML) < Number(box[count+1].innerHTML)) {
            temp = box[count].innerHTML
            box[count].innerHTML =  box[count+1].innerHTML
            box[count+1].innerHTML = temp
            box[count].style.height = 20 + Math.abs(box[count].innerHTML*20) +"px"
            box[count+1].style.height = 20 + Math.abs(box[count+1].innerHTML*20) +"px"
          }
        }
        else {
          clearInterval(mark)
        }   
      }
      var changeC = setInterval(color, speed*2)
      function color () {
        if(count < box.length-run) {
          box[count].style.backgroundColor = unselectColor
          box[count+1].style.backgroundColor = unselectColor
          count++
        }
        else {
          box[box.length-run].style.backgroundColor = doneColor
          clearInterval(changeC)
          run++
          if(run < box.length) {
            var next = false;
            for(let i = 0; i < box.length-1; i++) {
              if(Number(box[i].innerHTML) < Number(box[i+1].innerHTML)) {
                next = true
                break;
              }
            }
            if(next) {
              start()
            }
            else {
              var from = box.length-run
              var done = setInterval(auto, speed)
              function auto() {
                if(0 <= from) {
                  box[from].style.backgroundColor = doneColor
                  from--
                }
                else {
                  clearInterval(done)
                }
              }
            }
          }
        }   
      }
    }
  }
}

function selectionSort(by) {
  if(by === '>') {
    start()
    function start () {
      var count = 0
      var mark = setInterval(sort, speed)
      function sort () {
        if(count < box.length-run) {
          box[run-1].style.backgroundColor = selectColor
          box[run+count].style.backgroundColor = selectColor
          if(Number(box[run-1].innerHTML) > Number(box[run+count].innerHTML)) {
            temp = box[run-1].innerHTML
            box[run-1].innerHTML =  box[count+run].innerHTML
            box[count+run].innerHTML = temp
            box[run-1].style.height = 20 + Math.abs(box[run-1].innerHTML*20) +"px"
            box[count+run].style.height = 20 + Math.abs(box[count+run].innerHTML*20) +"px"
          }
        }
        else {
          clearInterval(mark)
        }   
      }
      var changeC = setInterval(color, speed*2)
      function color () {
        if(count < box.length-run) {
          box[run-1].style.backgroundColor = unselectColor
          box[count+run].style.backgroundColor = unselectColor
          count++
        }
        else {
          box[run-1].style.backgroundColor = doneColor
          clearInterval(changeC)
          run++
          if(run < box.length) {
            var next = false;
            for(let i = 0; i < box.length-1; i++) {
              if(Number(box[i].innerHTML) > Number(box[i+1].innerHTML)) {
                next = true
                break;
              }
            }
            if(next) {
              start()
            }
            else {
              var fromSel = run-1
              var done = setInterval(auto, speed)
              function auto() {
                if(fromSel < box.length) {
                  box[fromSel].style.backgroundColor = doneColor
                  fromSel++
                }
                else {
                  clearInterval(done)
                }
              }
            }
          }
          else {
          box[run-1].style.backgroundColor = doneColor
          }
        }   
      }
    }
  }
  else {
    start()
    function start () {
      var count = 0
      var mark = setInterval(sort, speed)
      function sort () {
        if(count < box.length-run) {
          box[run-1].style.backgroundColor = selectColor
          box[run+count].style.backgroundColor = selectColor
          if(Number(box[run-1].innerHTML) < Number(box[run+count].innerHTML)) {
            temp = box[run-1].innerHTML
            box[run-1].innerHTML =  box[count+run].innerHTML
            box[count+run].innerHTML = temp
            box[run-1].style.height = 20 + Math.abs(box[run-1].innerHTML*20) +"px"
            box[count+run].style.height = 20 + Math.abs(box[count+run].innerHTML*20) +"px"
          }
        }
        else {
          clearInterval(mark)
        }   
      }
      var changeC = setInterval(color, speed*2)
      function color () {
        if(count < box.length-run) {
          box[run-1].style.backgroundColor = unselectColor
          box[count+run].style.backgroundColor = unselectColor
          count++
        }
        else {
          box[run-1].style.backgroundColor = doneColor
          clearInterval(changeC)
          run++
          if(run < box.length) {
            var next = false;
            for(let i = 0; i < box.length-1; i++) {
              if(Number(box[i].innerHTML) < Number(box[i+1].innerHTML)) {
                next = true
                break;
              }
            }
            if(next) {
              start()
            }
            else {
              var fromSel = run-1
              var done = setInterval(auto, speed)
              function auto() {
                if(fromSel < box.length) {
                  box[fromSel].style.backgroundColor = doneColor
                  fromSel++
                }
                else {
                  clearInterval(done)
                }
              }
            }
          }
          else {
          box[run-1].style.backgroundColor = doneColor
          }
        }   
      }
    }
  }
}

function insertionSort(by) {//still not perfect
  if(by === '>') {
    start()
    function start () {
      var count = run-1
      var mark = setInterval(sort, speed)
      function sort () {
        if(count >= 0) {
          box[count].style.backgroundColor = selectColor
          box[count+1].style.backgroundColor = selectColor
          if(Number(box[count].innerHTML) > Number(box[count+1].innerHTML)) {
            temp = box[count].innerHTML
            box[count].innerHTML =  box[count+1].innerHTML
            box[count+1].innerHTML = temp
            box[count].style.height = 20 + Math.abs(box[count].innerHTML*20) +"px"
            box[count+1].style.height = 20 + Math.abs(box[count+1].innerHTML*20) +"px"
          }
        }
        else {
          clearInterval(mark)
        }   
      }
      var changeC = setInterval(color, speed*2)
      function color () {
        if(count >= 0) {
          box[count].style.backgroundColor = unselectColor
          box[count+1].style.backgroundColor = unselectColor
          count--
        }
        else {
          clearInterval(changeC)
          run++
          if(run < box.length) {
            var next = false;
            for(let i = 0; i < box.length-1; i++) {
              if(Number(box[i].innerHTML) > Number(box[i+1].innerHTML)) {
                next = true
                break;
              }
            }
            if(next) {
              start()
            }
          }
          else {
            var from = run-1
            var done = setInterval(auto, speed)
            function auto() {
              if(0 <= from) {
                box[from].style.backgroundColor = doneColor
                from--
              }
              else {
                clearInterval(done)
              }
            }
          }
        }   
      }
    }
  }
  else {
    start()
    function start () {
      var count = run-1
      var mark = setInterval(sort, speed)
      function sort () {
        if(count >= 0) {
          box[count].style.backgroundColor = selectColor
          box[count+1].style.backgroundColor = selectColor
          if(Number(box[count].innerHTML) < Number(box[count+1].innerHTML)) {
            temp = box[count].innerHTML
            box[count].innerHTML =  box[count+1].innerHTML
            box[count+1].innerHTML = temp
            box[count].style.height = 20 + Math.abs(box[count].innerHTML*20) +"px"
            box[count+1].style.height = 20 + Math.abs(box[count+1].innerHTML*20) +"px"
          }
        }
        else {
          clearInterval(mark)
        }   
      }
      var changeC = setInterval(color, speed*2)
      function color () {
        if(count >= 0) {
          box[count].style.backgroundColor = unselectColor
          box[count+1].style.backgroundColor = unselectColor
          count--
        }
        else {
          clearInterval(changeC)
          run++
          if(run < box.length) {
            var next = false;
            for(let i = 0; i < box.length-1; i++) {
              if(Number(box[i].innerHTML) < Number(box[i+1].innerHTML)) {
                next = true
                break;
              }
            }
            if(next) {
              start()
            }
          }
          else {
            var from = run-1
            var done = setInterval(auto, speed)
            function auto() {
              if(0 <= from) {
                box[from].style.backgroundColor = doneColor
                from--
              }
              else {
                clearInterval(done)
              }
            }
          }
        }   
      }
    }
  }
}