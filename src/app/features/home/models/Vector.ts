export default class Vector {
    constructor(
        public x: number = 0,
        public y: number = 0
    ) { }

    public isEqual(vector: Vector): boolean {
        return (this.x === vector.x || this.y === vector.y) ? true : false;
    }

    public add(vector: Vector): Vector {
        return new Vector(this.x + vector.x, this.y + vector.y);
    }

    public subtract(vector: Vector): Vector {
        return new Vector(this.x - vector.x, this.y - vector.y);
    }

    public multiply(scalar: number): Vector {
        return new Vector(this.x * scalar, this.y * scalar);
    }

    public divide(scalar: number): Vector {
        if (scalar === 0) return this;

        return new Vector(this.x / scalar, this.y / scalar);
    }

    public dotProduct(vector: Vector): number {
        return this.x * vector.x + this.y * vector.y;
    }

    public normalize(): Vector {
        const mag = this.magnitude;

        if (mag > 0) {
            return this.multiply(1 / mag);
        }
        return this;
    }

    public limit(maxMagnitud: number): Vector {
        const mag = this.magnitude;

        if (mag < 0.15)
            return new Vector(0, 0);

        if (mag > maxMagnitud) {
            const unit = this.normalize();
            const limited = unit.multiply(maxMagnitud);
            return limited;
        }
        return this;
    }

    public get magnitude(): number {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }

    public get direction(): number {
        return Math.atan2(this.x, this.y);
    }
}