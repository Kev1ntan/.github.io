var display = document.getElementById("display2")
var screen = document.getElementById("display")

function num(x) {
    if(display.value == eval(screen.value)) {
        screen.value = display.value
        display.value = ''
    }
    if(display.value.length === 0 && typeof x === 'number') {
        display.value += x
    }
    else if(display.value.length !== 0) {
        if(display.value[display.value.length-1] === '.' && x === '.') {
        }
        else if(display.value.match(/[*-+/]/) && typeof x !== 'number') {
        }
        else if (display.value.match(/[.]/) && x === '.'){
        }
        else {
            display.value += x
        }
    }
}

function back() {
    display.value = display.value.substring(0,display.value.length-1)
}

function reset() {
    display.value = ''
    screen.value = ''
}

function ress() {
    screen.value = display.value
    display.value = eval(display.value)
}