const Sketch = (p5) => {
    const width = p5.windowWidth;
    const height = p5.windowHeight;

    p5.setup = () => {
        p5.createCanvas(width, height);
        p5.background(40);
    }

    p5.draw = () => {
        p5.stroke(255);
        p5.ellipse(width/2, height/2, 150);
    }
}

export default Sketch;
