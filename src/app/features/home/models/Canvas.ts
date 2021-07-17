import ParticleSystem from './ParticleSystem';
import Vector from './Vector';

export default class Canvas {
  private particlesLength = 60;
  private width: number = 300;
  private height: number = 300;

  constructor(
    private canvas: HTMLDivElement = document.createElement('div'),
    private particleSystem: ParticleSystem = new ParticleSystem()
  ) {
    this.width = this.canvas.clientWidth;
    this.height = this.canvas.clientHeight;
    this.particlesLength = this.getParticlesLenghtFromCanvasSize();
  }

  public updateSize(width: number, height: number): void {
    this.width = width;
    this.height = height;
  }

  public init(): void {
    this.adjustParticleSystemToCanvasSize();
    this.particleSystem.Origin = new Vector(this.width / 2, this.height / 2);
    this.particleSystem.init(this.particlesLength, this.canvas);
    this.setEvents();
  }

  public run(): void {
    this.runAnimation();
  }

  private runAnimation = () => {
    requestAnimationFrame(this.runAnimation);

    this.update();
  };

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
    if (this.width < 600) {
      this.particleSystem.setParticlesRadius(15);
      return;
    }
    if (this.width < 768) {
      this.particleSystem.setParticlesRadius(17);
      return;
    }
    if (this.width < 1024) {
      this.particleSystem.setParticlesRadius(20);
      return;
    }
    this.particleSystem.setParticlesRadius(24);
  }

  public getParticlesLenghtFromCanvasSize(): number {
    const particlesLengthBase: number = 60;

    if (this.width < 400) {
      return Math.floor(particlesLengthBase * 0.4);
    }
    if (this.width < 600) {
      return Math.floor(particlesLengthBase * 0.5);
    }
    if (this.width < 768) {
      return Math.floor(particlesLengthBase * 0.6);
    }
    if (this.width < 1024) {
      return Math.floor(particlesLengthBase * 0.8);
    }
    return Math.floor(particlesLengthBase);
  }
}
