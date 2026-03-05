# Challenge invoice 

/*Definir la estructura de un objeto que almacena una factura (Invoice)

Las facturas están formadas por:

- la información de la propia empresa (nombre de la empresa, dirección, teléfono, NIF),
- la información del cliente (similar a la de la empresa),
- una lista de elementos (cada uno de los cuales dispone de descripción, precio, cantidad),
- y otra información básica de la factura (importe total, tipo de IVA, forma de pago).

Todas las propiedades se redefinen como privadas.
Una vez definidas las propiedades del objeto

Se incluyen 2 métodos públicos:

1. calcula el importe total de la factura y actualice el valor de la propiedad correspondiente.
2. muestre por pantalla el importe total de la factura en un formato adecuado.
3. muestre por pantalla toda la factura en un formato adecuado.
   Opción: el primero de los métodos debería redefinirse como privado.*/


export class Invoice {
    // 1. Propiedades privadas con #
    #empresa;
    #cliente;
    #articulos;
    #importeTotal;
    #tipoIVA;
    #formaPago;

    constructor(empresa, cliente, articulos, tipoIVA, formaPago) {
        this.#empresa = empresa;
        this.#cliente = cliente;
        this.#articulos = articulos;
        this.#tipoIVA = tipoIVA;
        this.#formaPago = formaPago;
        this.#importeTotal = 0; 

        // Se calcula solo al crear la factura
        this.#calculaImporteTotal();
    }

    // MÉTODO PRIVADO: El cálculo interno
    #calculaImporteTotal() {
        let subtotal = 0;
        this.#articulos.forEach(item => {
            subtotal += item.precio * item.cantidad;
        });
        this.#importeTotal = subtotal + (subtotal * (this.#tipoIVA / 100));
    }

    // MÉTODO PÚBLICO 1
    mostrarImporteTotal() {
        console.log(`TOTAL FACTURA: ${this.#importeTotal.toFixed(2)} € (IVA incluido)`);
    }

    // MÉTODO PÚBLICO 2
    mostrarFacturaCompleta() {
        console.log("======= DATOS DE LA EMPRESA =======");
        console.log(`Nombre: ${this.#empresa.nombre}`);
        console.log(`NIF: ${this.#empresa.nif}`);
        
        console.log("\n======= DATOS DEL CLIENTE =======");
        console.log(`Cliente: ${this.#cliente.nombre}`);
        console.log(`Dirección: ${this.#cliente.direccion}`);

        console.log("\n======= ARTÍCULOS =======");
        this.#articulos.forEach(item => {
            console.log(`- ${item.descripcion}: ${item.cantidad} x ${item.precio}€`);
        });

        console.log("\n===================================");
        console.log(`Forma de pago: ${this.#formaPago}`);
        this.mostrarImporteTotal(); 
    } // Aquí cerramos el método
