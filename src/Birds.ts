import { Animal } from "./Animal";

class Bird extends Animal {
    public canFly: boolean;

    constructor (name:string, lifetime: number, size: number, weight: number, canFLy: boolean) {
        super(name, lifetime, size, weight);
        this.canFly = canFly

    }
}

export { Bird };