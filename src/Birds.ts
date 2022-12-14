import { Animal } from "./Animal";

abstract class Bird extends Animal {
    public canFly: boolean;

    constructor (name:string, lifetime: number, size: number, weight: number, canFly: boolean) {
        super(name, lifetime, size, weight);
        this.canFly = canFly;

    }
}

export { Bird };