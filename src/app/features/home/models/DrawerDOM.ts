import Vector from "./Vector";

export default abstract class DrawerDOM {

    private htmlElement: HTMLDivElement;

    constructor(
        private _radius: number = 10,
        public color: string = '',
        public position: Vector = new Vector(),
    ) {
        this.htmlElement = document.createElement('div');
        this.configHTMLElement();
        this.draw();
    }

    public get ElementHTML(): HTMLDivElement {
        return this.htmlElement;
    }

    public get radius(): number {
        return this._radius;
    }

    public set radius(radius: number) {
        this._radius = radius;
        this.setHTMLSize();
    }

    private setHTMLSize(): void {
        this.htmlElement.style.width = 2 * this._radius + 'px';
        this.htmlElement.style.height = 2 * this._radius + 'px';
    }

    private configHTMLElement(): void {
        this.setHTMLSize();
        this.htmlElement.style.backgroundColor = `${this.color}`;
        this.addStyleClass('ball');
    }

    public addStyleClass(className: string): void {
        this.htmlElement.classList.add(className);
    }

    public draw(): void {
        const topLeftPosition = this.mapCenterCoordToTopLeft(this.position, this._radius);

        this.htmlElement.style.top = topLeftPosition.y + 'px';
        this.htmlElement.style.left = topLeftPosition.x + 'px';
    }

    private mapCenterCoordToTopLeft(position: Vector, radius: number): Vector {
        const xPos = position.x - radius;
        const yPos = position.y - radius;
        return new Vector(xPos, yPos);
    }
}