/**
 *Completa la función para que retorne los numeros de un array que sumados coincidan con el número entero. En caso de que no exista un par de numeros que sumados sean igual al número entero retorna false. Ademas no puedes retornar numeros iguales
 *Ej.
 *arr=[1,5,8,1,2], num=13 --->[5,8] //5+8=13
 *arr=[2,5,0,9,2], num=13 ---> false
 *arr=[5,3,9,1,7], num=4 --->[1,3]
 */
// No cambies el nombre de la funcion ni los parametros
const sumArray = (array, num) => {
  // Iterar sobre cada elemento del array
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      // Verificar si la suma de los elementos es igual a num y los elementos son diferentes
      if (array[i] + array[j] === num) {
        return [array[i], array[j]];
      }
    }
  }
  // Si no se encuentra ningún par de números que cumpla las condiciones, retornar false
  return false;
};

// 👇 No modifiques este codigo 🚫
module.exports = {
  sumArray,
};
