const symbol = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

function getNumberConv() {
    let number = document.getElementById('number-10').value;
    let base = document.getElementById('number-result-base').value;
    console.log(number, base);
    if (!number) {
        console.log('Ошибка ввода основания системы счисления!');
        return
    }
    result = '';
    while (number > 0) {
        result += symbol[number % base];
        number = Math.floor(number / base);
    }
    result = result.split("").reverse().join("");
    let span_result = document.querySelector('.js-result-conv');
    span_result.textContent = result;
}

function getNumberDec() {
    let number = document.getElementById('number-conv').value;
    let base = document.getElementById('number-conv-base').value;
    result = 0;
    j = 0;
    for (i = (number.length - 1); i >= 0; i--) {
        index = symbol.findIndex(j => j == number[i]);
        result += index * base ** j;
        j++
    }
    let span_result = document.querySelector('.js-result-10');
    span_result.textContent = result
}