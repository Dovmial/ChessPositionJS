
import { Board } from './src/Board.js';
import { PositionBuilder } from './src/PositionBuilder.js';
import { PositionLoader } from './src/PositionLoader.js';

//создание доски
const board = (new Board())
                    .setStyle()
                    .initCells();
                    
//добавление доски в дерево html
document.body.appendChild(board.element);

//Зарузка позиции
const positionBuilder = (new PositionBuilder()).SetStartPosition();
PositionLoader.Load(board, positionBuilder);