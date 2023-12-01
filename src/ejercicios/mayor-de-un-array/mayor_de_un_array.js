/**
 * Completa la función para que retorne el numero mayor de un array.
 * Ej.
 * arr=[1,20,3,4,9,] ---> 20
 * arr=[-2,-9,-2,-3,-1] ---> -1
 * arr=[-1,3,-4,4]---> 4
 */

// No cambies el nombre de la funcion ni los parametros
const mayorDeUnArray = (arr) => {
  var numeroMayor = arr[0];
  for (var elemento of arr) {
    if (elemento > numeroMayor) { numeroMayor = elemento };
  }
  return numeroMayor;
}
  ;

// 👇 No modifiques este codigo 🚫
module.exports = {
  mayorDeUnArray,
};
