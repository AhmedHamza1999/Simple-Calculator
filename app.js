
let input = document.getElementById("input");
let result = document.getElementById("result");

function getNumber(num) {
    switch (num) {
        case 'AC':
            input.innerHTML = "";
            result.innerHTML=0;
            break;

        case 'C':
            input.innerHTML = input.innerHTML.substr(0, input.innerHTML.length - 1);
            result.innerHTML = eval(input.innerHTML) === undefined ? 0: eval(input.innerHTML);
            break;
        case '=':
            result.innerHTML = eval(input.innerHTML);
            break;
        
        default:
            input.innerHTML += num;
    }



}


