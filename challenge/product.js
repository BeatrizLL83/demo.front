export class Product {

    #sku //string;
    #name //string;
    #unityPrice //number;
    constructor (sku, name, unitaryPrice) {
        this.#sku = sku;
        this.#name = name;
        this.#unityPrice = unitaryPrice;
    }

    renderInvoiceLine (amount) {
        const result = [string, number] = ['', this.#calculatePrice (amount)];
        result[0] = `
        ${this.#name}: ${amount} unidades a ${
            this.#unityPrice
        }€ Total..................${result[1]}€`;
        return result;
        `
    }
}        

const array: (number | string) [] = []
array.push('Pepe', 23, 'Ramón', 39)
console.log(array)

let tuple: [number, string]
tuple = [23, 'Pepe']
tuple = ['Pepe', 23]
console.log(tuple)


const p1 = new Product('B01')


const p1 = new Product('name, items, price') {
    return `${name}: ${items}`
}

