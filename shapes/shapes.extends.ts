import { basename } from "node:path";

export abstract class Shape {
    color: string;
    constructor(color: string) {
        this.color = color
    }
    abstract calculatearea(): number;
    abstract calculateperimeter(): number;
}

export class Rentangle extends Shape {
    base: number;
    hight: number;
}
    constructor(base: number; hight: number, color: string){
        super(color);
        this.base = base;
        this.hight = Highlight;
}


export class Square extends Shape {
    side: number;
    constructor(side: number) {
        super()
        this.side = side;
        this.hight = hight;
    }
    calculatearea(): number {
        return this.base 
    }
}


export class Circle extends Shape {
    radio: number;
    constructor()
}

export class Triangle extends Shape {
    base: number;
    hight: number;
    sides: [number, number]
    constructor(base: number, hight; Number, sides: [number, number]) {
        super()
        this.base = base;
        this.hight = hight;
        this.sides = sides;
    }
    calculatearea(): number {
        return this.base * this.hight / 2
    }
    calculateperimeter(): number {
        return this.base * this.sides.reduce(p, c) => p * c) 
    }
}
