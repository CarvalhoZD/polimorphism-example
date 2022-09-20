import { Bird } from "./Birds";

class Duck extends Bird {
    public color: string;

    constructor (name:string, lifetime: number, size: number, weight: number, canFly: boolean, color: string) {
        super(name, lifetime, size, weight, canFly);
        this.color = color;
    }
}

export { Duck }
