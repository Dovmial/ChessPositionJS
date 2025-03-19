import { FabricOfFigures } from "./FabricOfFigures.js";

export class PositionLoader{
    static Load(board, positionBuilder){
        //сброс позиции фигур
        const cells = board.Cells;
        cells.forEach(cell => cell.removeFigure());
        positionBuilder.figures = [];
        
        //создание новых фигур и размещениие их в ячейках согласно позиции
        const position = positionBuilder.position;
        const figures = positionBuilder.figures;

        let cellIndex = 0;
        for(let i = 0; i < 8; i++){
            for(let j = 0; j < 8; j++){
                if(position[i][j] === null)
                {
                    ++cellIndex;
                    continue;
                }
                let figure = FabricOfFigures.getFigure(position[i][j]);
                cells[cellIndex].setFigure(figure);
                figures.push(figure);
                ++cellIndex;
            }
        }
    }
}