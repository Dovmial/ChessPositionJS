
import { Cell } from './Cell.js';

export class Board {
    constructor() {
        this.element = document.createElement('div');
        this.Cells = [];
    }
    setStyle() {
        this.element.style.display = 'flex';
        this.element.style.width = '640px';
        this.element.style.height = '640px';
        this.element.style.flexWrap = 'wrap';
        this.element.style.alignContent = 'flex-start';
        this.element.style.border = "solid 5px black";
        return this;
    }
    append(cell) {
        this.Cells.push(cell);
        this.element.appendChild(cell.element);
    }

    initCells() {
        //добавление ячеек
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                let cell = new Cell(i, j);
                cell.setStyles();
                this.append(cell);
            }
        }
        return this;
    }
}