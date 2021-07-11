import ParticleSystem from "./ParticleSystem";
import Vector from "./Vector";

export default class Canvas {

    private particlesLength = 18;
    private width: number = 300;
    private height: number = 300;

    constructor(
        private canvas: HTMLDivElement = document.createElement('div'),
        private particleSystem: ParticleSystem = new ParticleSystem()

    ) {
        this.width = this.canvas.clientWidth;
        this.height = this.canvas.clientHeight;
    }

    public updateSize(width: number, height: number): void {
        this.width = width;
        this.height = height;
    }

    public init(): void {
        this.adjustParticleSystemToCanvasSize();
        this.particleSystem.Origin = new Vector(this.width / 2, this.height / 2)
        this.particleSystem.init(this.particlesLength, this.canvas);
        this.setEvents();
    }

    public run(): void {
        this.runAnimation();
    }

    private runAnimation = () => {
        requestAnimationFrame(this.runAnimation);

        this.update();
    }

    private update(): void {
        this.particleSystem.updateParticles(this.width, this.height);
    }

    private setEvents() {
        this.canvas.addEventListener('mouseenter', () => {
            window.addEventListener('mousemove', this.onMouseChange);
        });

        this.canvas.addEventListener('mouseleave', () => {
            window.removeEventListener('mousemove', this.onMouseChange);
        });
    }

    private onMouseChange = (evt: MouseEvent) => {
        const mousePosition = new Vector(evt.pageX, evt.pageY);
        this.particleSystem.updateRepeller(mousePosition);
    };

    public adjustParticleSystemToCanvasSize(): void {
        if (this.width < 420) {
            this.particleSystem.setParticlesRadius(17);
            console.log(this.width);
            return;
        }
        if (this.width < 768) {
            this.particleSystem.setParticlesRadius(22);
            return;
        }
        if (this.width < 1024) {
            this.particleSystem.setParticlesRadius(25);
            return;
        }
        this.particleSystem.setParticlesRadius(30);
    }
}