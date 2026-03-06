export class company {
    #name;
    #address;
    #phone;
    #nif;

    //setters & getters
    get name() {return this.#name}
    get address () {return this.#address}
    get phone() {return this.#phone}
    get nif() {return this.#nif.toupperCase()}

    constructor(name, address, phone, nif) {
        this.#name = name;
        this.#address = address;
        this.#phone = phone;
        this.#nif = nif;
    }
}

const c1 = new Company(
    'Acme',
    'c/Pez',
    '654-968-098',
    '5645535468Z',

    returnInfo() {
        return `${this.#name} ${this.#addressÇ - ${this,#phone} `
    }






); /*Variable*/

const c1 = new Company('Acme', 'c/Pez', '654-968-098', '5645535468Z');
const c2 = new Company('X', 'c/Rana', '654-925-050', '5644655468Z');

console.log(c1, c2);
