/*
Crea una función que verifique el final de una cadena. 
Ej.
cadena="hola mundo"
final="undo"
retorna-> true

cadena="hola"
final="h"
retorna-> false
 */
// No cambies el nombre de la funcion ni los parametros
const finalIdentico = (cadena, final) => {
  //  Tu respuesta va aqui
  const subcadenaEscapada = final.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`${subcadenaEscapada}$`);
  resultado = regex.test(cadena);
  return resultado;
};

// 👇 No modifiques este codigo 🚫
module.exports = {
  finalIdentico,
};
