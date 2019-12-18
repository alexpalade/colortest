export class Color {
    public r: number;
    public g: number;
    public b: number;

    constructor(r: number, g: number, b: number) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    public print() {
        console.log("Color [ R: " + this.r +
                    ", G: " + this.g +
                    ", B: " + this.b + " ] ");
    }

    public subtract(other: Color): Color {
        const r = this.clamp(this.r - other.r, 0, 255);
        const g = this.clamp(this.g - other.g, 0, 255);
        const b = this.clamp(this.b - other.b, 0, 255);

        return new Color(r, g, b);
    }

    private clamp(value: number, min: number, max: number): number {
        return value > max ? max : value < min ? min : value;
    }
}
