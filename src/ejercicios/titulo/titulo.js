/*
La funcion debe retornar un título. Es decir cada inicial de cada palabra tiene que estar en mayuscula y las demas en minusculas. Ej.
hola mundo -> Hola Mundo
HOLA MUNDO -> Hola Mundo
jaVaScript eS un gRan Lenguaje-> Javascript Es Un Gran Lenguaje
 */
// No cambies el nombre de la funcion ni los parametros
function titulo(str) {
  // Tu código va aquí
  var strArr = str.split(" ");
  var newArr = strArr.map(x => x[0].toUpperCase() + x.substring(1).toLowerCase()).join(" ");
  return newArr;
}

// 👇 No modifiques este codigo 🚫
module.exports = {
  titulo,
};
