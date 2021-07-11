import Particle from "./Particle";
import Repeller from "./Repeller";
import Vector from "./Vector";
import { ParticleService } from '../services/particle.service';


export default class ParticleSystem {

    private power: number = 10;
    private radius: number = 45;

    private particleService: ParticleService = new ParticleService();
    private repeller: Repeller;

    constructor(
        private origin: Vector = new Vector(),
        private particles: Array<Particle> = [],
    ) {
        this.repeller = new Repeller(
            this.radius,
            this.particleService.getRepelerImage(),
            this.origin,
            this.power
        );
    }

    public set Origin(origin: Vector) {
        this.origin = origin;
    }

    public init(length: number, html: HTMLDivElement): void {
        this.generateParticles(length, html);
        html.appendChild(this.repeller.ElementHTML);
    }

    private generateParticles(length: number, html: HTMLDivElement): void {
        for (let i = 0; i < length; i++) {
            const particle: Particle = new Particle(
                this.radius,
                this.particleService.getRandomImage(),
                this.origin,
                new Vector(0, 0),
                new Vector(
                    Math.random(),
                    Math.random()
                ),
            );
            html.appendChild(particle.ElementHTML);
            this.particles.push(particle);
        }
    }

    public updateParticles(width: number, height: number): void {
        this.particles.forEach((particle, index) => {

            particle.update();

            for (let j = index + 1; j < this.particles.length; j++) {
                const nextParticle = this.particles[j];
                particle.checkCollision(nextParticle);
            }

            this.repeller.checkCollision(particle);

            particle.checkEdges(width, height);
            particle.draw();
        });
    }

    public updateRepeller(position: Vector): void {
        this.repeller.updatePosition(position);
        this.repeller.draw();
    }

    public setParticlesRadius(radius: number): void {
        this.radius = radius;

        this.particles.forEach(particle => {
            particle.radius = radius;
        });

        this.repeller.radius = radius;
    }
}