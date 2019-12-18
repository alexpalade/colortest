import { Color } from "./color";

export function getRandomColor(): Color {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;
    return new Color(r, g, b);
}

export function getRandomQuestion() {
    const c1 = getRandomColor();
    const c2 = getRandomColor();
    const c3 = c1.subtract(c2);

    return [c1, c2, c3];
}

export function getQuestions(howMany: number) {
    const result = [];

    for (let i = 0; i < howMany; ++i) {
        result.push(getRandomQuestion());
    }

    return result;
}
