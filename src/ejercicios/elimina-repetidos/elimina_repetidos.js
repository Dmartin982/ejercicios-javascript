/* 
Completa la funcion para que elimine los elementos repetidos de un array y retorne el array sin elementos repetidos.
Ej. 
arr=[1,3,4,1,2,3,4,5] --> [1,3,4,2,5]
arr=["hola","mundo","mundo","del","desarrollo","del"] -->[ 'hola', 'mundo', 'del', 'desarrollo' ]
arr=["tengo",90, "años",90, "viviendo", "tengo","en","en","mi","país","país"] --> [ 'tengo', 90, 'años', 'viviendo', 'en', 'mi', 'país' ]
*/

// No cambies el nombre de la funcion ni los parametros
const eliminaRepetidos = (arr) => {
  var newArr = [];
  for (let x = 0; x < arr.length; x++) {
    if (newArr.includes(arr[x])) { continue } else { newArr.push(arr[x]) };
  }

  return newArr;
  //  Tu respuesta va aqui
};

// 👇 No modifiques este codigo 🚫
module.exports = {
  eliminaRepetidos,
};
