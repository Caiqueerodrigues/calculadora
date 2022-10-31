var visor = document.getElementById('visor')
var n1 = parseFloat("")
var sinal = ` `


function calcular(value) {
    if (value == `.` || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 || 0 && n1 == ``) {
        n1 = value
        visor.innerHTML += (`${n1}`)
    } else if (sinal != ` `) {

    }

    if (value == `reset`) {
        visor.innerHTML = ` `
        n1 = ` `
        n2 = ` `
        sinal = ` `
    }
}   