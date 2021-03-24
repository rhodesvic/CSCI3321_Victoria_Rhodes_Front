function updateDisplay(newValue) {
    //find the display box
    var d = document.getElementById('display');

    switch (newValue) {
        case '':
            d.innerHTML = '';
            break;
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '+':
        case '-':
        case '*':
        case '/':
            d.innerHTML += newValue;
            break;
        case '=':
            // AAAAHHHHHHHHH
            // have this evaluate the mathematical expression entered
            // in the display box
            newValue = eval(d.innerHTML('display'));
            break;
    }
}
