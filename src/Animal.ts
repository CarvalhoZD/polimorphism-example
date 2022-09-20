abstract class Animal {
    public name: string;
    public lifetime: number;
    public size: number;
    public weight: number;

    constructor (name:string, lifetime: number, size: number, weight: number) {
        this.name = name;
        this.lifetime = lifetime;
        this.size = size;
        this.weight = weight;
    }
}

export { Animal };
