var numberReady = false
var dataReady = false
var box = document.getElementsByClassName("box")
var pick = document.getElementById("select")
var by = document.getElementById("by")
var selectedType = pick.options[pick.selectedIndex].value;
var selectedSortBy = by.options[by.selectedIndex].value;
var rows = document.getElementById("row")
var speed = 100
var run = 1
function generate(){
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
            newRow.style.height = box[i].innerHTML*10+'px'
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
        else if(selectedType === "selection") {
            alert("this sorting type still not available in this version")
        }
    }
}

function bubbleSort(by) {
  if(by === '>') {
    alert('asc')
    start()
    function start () {
      var count = 0
      var mark = setInterval(sort, speed)
      function sort () {
        if(count < box.length-run) {
          box[count].style.backgroundColor = 'blue'
          box[count+1].style.backgroundColor = 'blue'
          if(Number(box[count].innerHTML) > Number(box[count+1].innerHTML)) {
            temp = box[count].innerHTML
            box[count].innerHTML =  box[count+1].innerHTML
            box[count+1].innerHTML = temp
            box[count].style.height = box[count].innerHTML*20 +"px"
            box[count+1].style.height = box[count+1].innerHTML*20 +"px"
          }
        }
        else {
          clearInterval(mark)
        }   
      }
      var changeC = setInterval(color, speed*2)
      function color () {
        if(count < box.length-run) {
          box[count].style.backgroundColor = 'white'
          box[count+1].style.backgroundColor = 'white'
          count++
        }
        else {
          box[box.length-run].style.backgroundColor = 'yellow'
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
                  box[from].style.backgroundColor = 'yellow'
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
    alert('des')
    start()
    function start () {
      var count = 0
      var mark = setInterval(sort, speed)
      function sort () {
        if(count < box.length-run) {
          box[count].style.backgroundColor = 'blue'
          box[count+1].style.backgroundColor = 'blue'
          if(Number(box[count].innerHTML) < Number(box[count+1].innerHTML)) {
            temp = box[count].innerHTML
            box[count].innerHTML =  box[count+1].innerHTML
            box[count+1].innerHTML = temp
            box[count].style.height = box[count].innerHTML*20 +"px"
            box[count+1].style.height = box[count+1].innerHTML*20 +"px"
          }
        }
        else {
          clearInterval(mark)
        }   
      }
      var changeC = setInterval(color, speed*2)
      function color () {
        if(count < box.length-run) {
          box[count].style.backgroundColor = 'white'
          box[count+1].style.backgroundColor = 'white'
          count++
        }
        else {
          box[box.length-run].style.backgroundColor = 'yellow'
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
                  box[from].style.backgroundColor = 'yellow'
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

