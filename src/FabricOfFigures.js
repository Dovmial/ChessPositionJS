import { Figure } from "./Figure.js";

export class FabricOfFigures{
    static getFigure(figurePositionName){

        if(figurePositionName == null)
            return null;
        return new Figure(
            this.getTypeOfFigure(figurePositionName[0].toLowerCase()),
            figurePositionName[1].toLowerCase()
        );
    }
    //'pawn','knight', 'bishop', 'rook', 'queen', 'king';
    static getTypeOfFigure(symbol){
        switch(symbol){
            case 'p': return 'pawn';
            case 'n': return 'knight';
            case 'b': return 'bishop';
            case 'r': return 'rook';
            case 'q': return 'qween';
            case 'k': return 'king';
        };
    }
}