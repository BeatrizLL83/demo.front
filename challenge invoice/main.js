// 1. LA RECETA (La clase Invoice)
class Invoice {
    #empresa; 
    #cliente; 
    #articulos; 
    #total = 0; 
    #iva; #pago;

    constructor(empresa, cliente, articulos, iva, pago) {
        this.#empresa = empresa;
        this.#cliente = cliente;
        this.#articulos = articulos;
        this.#iva = iva;
        this.#pago = pago;
        this.#calculaTotal();
    }

    #calculaTotal() {
        let suma = 0;
        this.#articulos.forEach(item => {
            suma += item.precio * item.cantidad;
        });
        this.#total = suma + (suma * (this.#iva / 100));
    }

    mostrarFactura() {
        console.log("======= FACTURA BEA S.L. =======");
        console.log("Cliente: " + this.#cliente.nombre);
        console.log("Artículos:");
        this.#articulos.forEach(item => {
            console.log("- " + item.desc + ": " + item.cantidad + " x " + item.precio + "€");
        });
        console.log("TOTAL CON IVA: " + this.#total.toFixed(2) + "€");
    }
}

// 2. LOS DATOS (Creamos la factura de verdad)
const miEmpresa = { nombre: "Bea S.L.", nif: "B123" };
const miCliente = { nombre: "Pepe García", nif: "777X" };
const misProductos = [
    { desc: "Ratón", precio: 20, cantidad: 2 },
    { desc: "Teclado", precio: 50, cantidad: 1 }
];

const facturaFinal = new Invoice(miEmpresa, miCliente, misProductos, 21, "Efectivo");

// 3. ¡LA MAGIA! (Lo sacamos por consola)
facturaFinal.mostrarFactura();
