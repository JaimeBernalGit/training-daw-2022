// Declarar un array numérico (entero) y crear un método que imprima:
// La suma de todos los elementos
// El elemento más grande
// El elemento más pequeño
// La media de los elementos



function doCalculation(array) {
    let max=array[0];
    let min=array[0];
    let sum=0;
    for (let i = 0; i<array.length; i++) {
            if(array[i]>max)[
                max=array[i]
            ]
            if(array[i]<min)[
                min=array[i]
            ]
        sum=sum+(array[i]);
    }
    console.log("La suma de los números es "+sum);
    let med=sum/array.length;
    console.log("La media de los números es "+med);
    console.log("El máximo de los números es "+max);
    console.log("El mínimo de los números es "+min);
}

doCalculation([1,2,3,4])
doCalculation([5,5,5,5])
doCalculation([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5])