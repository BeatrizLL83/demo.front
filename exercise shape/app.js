import { Cuadrado, Rectangulo, Triangulo, Circulo } from './shape.js';

// Creamos los objetos con sus medidas
const miCuad = new Cuadrado(6);
const miRect = new Rectangulo(10, 4);
const miTri = new Triangulo(10, 8, 7, 7); // Base 10, Altura 8, Lados 7 y 7
const miCirc = new Circulo(5);

// Metemos todas las figuras en una lista (Array) para recorrerlas
const figuras = [miCuad, miRect, miTri, miCirc];

// Usamos un bucle para mostrar los resultados de forma elegante
figuras.forEach((figura) => {
    console.log(`--- Resultados del ${figura.nombre} ---`); // Mostramos el nombre guardado
    console.log(`Área: ${figura.calcularArea().toFixed(2)}`); // Calculamos área con 2 decimales
    console.log(`Perímetro: ${figura.calcularPerimetro().toFixed(2)}`); // Calculamos perímetro
    console.log(''); // Espacio en blanco para que respire la consola
});
