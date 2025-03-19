
export class Figure{
    constructor(type, color){
        this.type = type.toLowerCase();
        this.color = color.toLowerCase();
        this.img;
        this.x;
        this.y;
        this.element = this.CreatePieceElement(type, color)
    }

    MoveToCell(x, y){
        this.x = x;
        this.y = y;
    }


    CreatePieceElement(type, color){
        const el = document.createElement('div');
        const imgEl = document.createElement('img');
        imgEl.src = `./img/${type}${color === 'w' ? 'W' : 'B'}.png`;
        imgEl.alt = `${type} ${color === 'w' ? 'white' : 'black'}`;
        el.append(imgEl);
        return el;
    }
}