/*1. Escribe una función que tome un arreglo de objetos JSON que representan productos, y
devuelva la suma de los precios de los productos y la suma total del valor del stock de la
tienda. Utiliza la función reduce y el spread operator para obtener los precios de cada
objeto y sumarlos.
Restricción: Para solucionar el problema no se puede usar ciclos, se deben usar las
funciones expuestas en el problema.*/

const e = require("express");



let productos = [
    { nombre: 'arroz', precio: 100, stock: 5 },
    { nombre: 'papa', precio: 200, stock: 3 },
    { nombre: 'yuca', precio: 50, stock: 10 }
  ];


  function calcularTotales(productos) {
    return productos.reduce((totales, { precio, stock }) => ({
      sumaPrecios: totales.sumaPrecios + precio,
      sumaValorStock: totales.sumaValorStock + (precio * stock)
    }), { sumaPrecios: 0, sumaValorStock: 0 });
  }

let resultado1 = calcularTotales(productos);
console.log(resultado1);


/*2. Escribe una función que tome un arreglo de objetos JSON que representan productos, y
devuelva un objeto que contenga la suma de los precios de los productos, la cantidad
total de productos, y el nombre del producto más caro. Utiliza el spread operator, la
función reduce, map y sort para calcular los valores necesarios.
Restricción: Para solucionar el problema no se puede usar ciclos, se deben usar las
funciones expuestas en el problema. */


function calcularEstadisticas(productos) {
    const { sumaPrecios, cantidadTotal } = productos.reduce((totales, { precio }) => ({
      sumaPrecios: totales.sumaPrecios + precio,
      cantidadTotal: totales.cantidadTotal + 1
    }), { sumaPrecios: 0, cantidadTotal: 0 });
  
    const productoMasCaro = productos
      .sort((a, b) => b.precio - a.precio)[0].nombre;
  
    return {
      sumaPrecios,
      cantidadTotal,
      productoMasCaro
    };
  }

let resultado2 = calcularEstadisticas(productos);
console.log(resultado2);


/*3. Dado un arreglo de números, escribe una función que devuelva un nuevo arreglo que
contenga solo los números pares, y cada número se multiplique por 2. Utiliza la función
filter y la función map.
Restricción: Para solucionar el problema no se puede usar ciclos, se deben usar las
funciones expuestas en el problema*/


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultado = paresMultiplicados(numeros);

function paresMultiplicados(numeros) {
    return numeros
      .filter(numero => numero % 2 === 0)  
      .map(numero => numero * 2);           
  }
  

  console.log(resultado);



 /* 4. Dado un arreglo de objetos JSON que representan usuarios, escribe una función que
devuelva un nuevo arreglo que contenga solo los usuarios mayores de edad (18 años o
más), y para cada usuario se agregue una nueva propiedad "age_in_days" que
represente la edad del usuario en días. Utiliza el spread operator, la función map y filter.
Restricción: Para solucionar el problema no se puede usar ciclos, se deben usar las
funciones expuestas en el problema*/

let usuarios = [
    { nombre: 'Juan', edad: 17 },
    { nombre: 'Ana', edad: 22 },
    { nombre: 'Luis', edad: 30 },
    { nombre: 'Maria', edad: 15 }
  ];


function usuariosMayoresDeEdad(usuarios) {
    return usuarios
      .filter(usuario => usuario.edad >= 18) 
      .map(usuario => ({
        ...usuario, 
        age_in_days: usuario.edad * 365
      }));
      
  }
  
  const respuesta = usuariosMayoresDeEdad(usuarios);
  console.log(respuesta);

  
  /*5. Dado un arreglo de objetos JSON que representan productos, escribe una función que
devuelva un nuevo arreglo que contenga solo los productos que tengan un precio mayor
a $80000 y una cantidad inferior a 100, luego a cada producto se debe agregar una
nueva propiedad "product_tax_value" que represente el precio con el impuesto del 19%
y una propiedad “product_total_value” de valor más el impuesto calculado. Utiliza el
spread operator, la función map y filter.
Restricción: Para solucionar el problema no se puede usar ciclos, se deben usar las
funciones expuestas en el problema*/

let productos3 = [
    { nombre: 'Producto 1', precio: 90000, cantidad: 50 },
    { nombre: 'Producto 2', precio: 120000, cantidad: 200 },
    { nombre: 'Producto 3', precio: 75000, cantidad: 80 },
    { nombre: 'Producto 4', precio: 85000, cantidad: 90 }
  ];


function filtrarYCalcularImpuesto(productos3) {
  return productos3
    .filter(({ precio, cantidad }) => precio > 80000 && cantidad < 100)  
    .map(producto => ({
      ...producto,  
      product_tax_value: producto.precio * 1.19, 
      product_total_value: producto.precio * 1.19 * producto.cantidad 
    }));
}


const resultado3 = filtrarYCalcularImpuesto(productos3);
console.log(resultado3);


