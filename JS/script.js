const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;


class Szele {
    constructor({ position }, velocity) {
        this.position = this.position;
        this.width = 40;
        this.height = 40;
    }

    draw() {
        c.fillRect(this.position.x, this.position.y, this.height, this.width);
    }
}

const szele = new Szele({
    position: {
        x: 0,
        y: 0;
    }
})