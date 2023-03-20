export class Grocery {
    name: String;
    isle: number;
    quantity: number;
    price: String;

    constructor(name: string, isle: number, quantity: number, price: String) {
        this.name = name;
        this.isle = isle;
        this.quantity = quantity;
        this.price = price;
    }
}

export const groceries: Grocery[] = [
    new Grocery('eggs', 2, 12, '$4.50'),
    new Grocery('milk', 1, 2, '$6.00'),
    new Grocery('cereal', 7, 1, '$2.99')
];



