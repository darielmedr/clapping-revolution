import DrawerDOM from "./DrawerDOM";
import Particle from "./Particle";
import Vector from "./Vector";

export default class Repeller extends DrawerDOM {

    constructor(
        radius: number = 10,
        color: string = '',
        position: Vector = new Vector(),
        public power: number = 10
    ) {
        super(radius, color, position);
        this.addStyleClass('cursor');
    }

    public checkCollision(particle: Particle) {
        const minDist = this.radius + particle.radius;
        const distanceV = particle.position.subtract(this.position);
        const distMag = distanceV.magnitude;

        if (distMag > minDist)
            return;

        const directionUnitV = distanceV.normalize();

        // Resolve overlapping
        const deltaMag = minDist - distMag;
        const delta = directionUnitV.multiply(deltaMag + 1);
        particle.velocity = particle.velocity.add(delta);

        const speed = particle.velocity.magnitude;

        particle.acceleration.add(directionUnitV.multiply(0.5 * speed * this.power));
    }

    public updatePosition(position: Vector): void {
        this.position = position;
    }

}