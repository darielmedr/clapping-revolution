import DrawerDOM from "./DrawerDOM";
import Vector from "./Vector";

export default class Particle extends DrawerDOM {

    constructor(
        radius: number = 10,
        imageUrl: string = '',
        position: Vector,
        public velocity: Vector = new Vector(0, 0),
        public acceleration: Vector = new Vector(0, 0),
        public mass: number = 1
    ) {
        super(radius, imageUrl, position);
    }

    public checkEdges(width: number, height: number): void {
        if (this.position.x <= this.radius) {
            this.velocity.x *= -1;
            this.position.x = this.radius;
        }
        if (this.position.x > width - this.radius) {
            this.velocity.x *= -1;
            this.position.x = width - this.radius;
        }
        if (this.position.y <= this.radius) {
            this.velocity.y *= -1;
            this.position.y = this.radius;
        }
        if (this.position.y > height - this.radius) {
            this.velocity.y *= -1;
            this.position.y = height - this.radius;
        }
    }

    public update(): void {
        this.applyFrictionForce();
        this.velocity = this.velocity.add(this.acceleration);
        this.velocity = this.velocity.limit(5);
        this.position = this.position.add(this.velocity);
        this.acceleration = this.acceleration.multiply(0);
    }

    private applyFrictionForce(): void {
        const frictionForce: Vector = this.calculateFrictionForce();
        this.applyForce(frictionForce);

    }

    /**
     * F = -u * N * v
     *
     * F: friction force vector
     * u; friction coefficient
     * N: normal force
     * v: unit vector of velocity
     */
    private calculateFrictionForce(): Vector {
        const frictionCoefficient = 0.03;
        const normal = this.mass;
        const direction = this.velocity.normalize();
        const inverseDirection = direction.multiply(-1);

        const frictionV = inverseDirection.multiply(normal * frictionCoefficient);
        return frictionV;
    }

    public applyForce(force: Vector): void {
        const acceleration = force.divide(this.mass);
        this.acceleration = this.acceleration.add(acceleration);
    }

    public checkCollision(particle: Particle) {
        const overlapCoefficient = 0.5;
        const minDist = (this.radius + particle.radius) * overlapCoefficient;
        const distanceV = particle.position.subtract(this.position);
        const distMag = distanceV.magnitude;

        if (distMag > minDist)
            return;

        const directionUnitV = distanceV.normalize();

        // Resolve overlapping
        const deltaMag = minDist - distMag;
        const delta = directionUnitV.multiply(deltaMag/2 + 0.5);
        this.velocity = this.velocity.subtract(delta);
        particle.velocity = particle.velocity.add(delta);

        const dirCollisionUnitV = new Vector(-directionUnitV.y, directionUnitV.x);

        const speed = particle.velocity.magnitude;

        this.acceleration.add(directionUnitV.multiply(0.5 * speed));
        particle.acceleration.add(dirCollisionUnitV.multiply(0.5 * speed));
    }
}