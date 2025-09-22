// Debería imprimir los números del 1 al 5

for (let i = 1; i <= 5; i--) {
    console.log(i);
}

// Debería calcular el factorial de un número n

function factorial(n) {
    let resultado = 1;
    for (let i = 1; i <n; i++) { // <-- off-by-one
        resultado *= i;
    }
    return resultado;
}

console.log(factorial(5)); // Esperado: 120

function maximo(lista) {
    let max = 0; 
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] > max) {
            max = lista[i];
        }
    }
    return max;
}

console.log(maximo([-10, -3, -50])); // Esperado: -3

// Debería calcular la media de tres números

function media(a, b, c) {
    return a + b + c / 3;
}

console.log(media(4, 10, 16)); 
// Esperado: 10