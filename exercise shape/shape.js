// Clase para el Cuadrado
// 'export' permite que este código sea "visto" desde otros archivos .js
export class Cuadrado {
    // El constructor recibe el dato 'lado' cuando hacemos un 'new'
    constructor(lado) {
        this.nombre = 'Cuadrado'; // Creamos una etiqueta interna para saber qué figura es
        this.lado = lado; // 'this.lado' guarda el valor recibido para usarlo luego
    }
    // Función interna (método) para calcular el área
    calcularArea() {
        return this.lado * this.lado; // Multiplica el lado por sí mismo y devuelve el valor
    }
    // Función interna para calcular el perímetro
    calcularPerimetro() {
        return this.lado * 4; // Sumar los 4 lados es lo mismo que multiplicar por 4
    }
}

// Clase para el Rectángulo
export class Rectangulo {
    // El rectángulo necesita dos datos distintos: base y altura
    constructor(base, altura) {
        this.nombre = 'Rectángulo'; // Guardamos el nombre "Rectángulo" en el objeto
        this.base = base; // Guardamos la base internamente
        this.altura = altura; // Guardamos la altura internamente
    }
    calcularArea() {
        return this.base * this.altura; // El área es el producto de ambos lados
    }
    calcularPerimetro() {
        // Sumamos las dos bases y las dos alturas para rodear la figura
        return this.base * 2 + this.altura * 2;
    }
}

// Clase para el Triángulo (equilátero para simplificar)
export class Triangulo {
    // Para el triángulo pedimos base y altura (para el área) y otros dos lados (para el perímetro)
    constructor(base, altura, lado2, lado3) {
        this.nombre = 'Triángulo';
        this.base = base; // La base cuenta como el primer lado (lado1)
        this.altura = altura;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }
    calcularArea() {
        return (this.base * this.altura) / 2; // Fórmula matemática estándar
    }
    calcularPerimetro() {
        // Sumamos los tres lados que guardamos en el constructor
        return this.base + this.lado2 + this.lado3;
    }
}

// Clase para el Círculo
export class Circulo {
    constructor(radio) {
        this.nombre = 'Círculo';
        this.radio = radio; // Guardamos el radio, que es la distancia del centro al borde
    }
    calcularArea() {
        // Math.PI es 3.1415... y Math.pow(radio, 2) eleva el radio al cuadrado
        return Math.PI * Math.pow(this.radio, 2);
    }
    calcularPerimetro() {
        // La fórmula de la circunferencia es 2 * Pi * radio
        return 2 * Math.PI * this.radio;
    }
}
