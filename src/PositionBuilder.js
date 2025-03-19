
export class PositionBuilder{
    constructor(){
        this.figures = [];
        this.position;
    }
    SetStartPosition(){
        this.position = 
        [['Rb','Nb','Bb','Qb','Kb','Bb','Nb','Rb'],
         ['pb','pb','pb','pb','pb','pb','pb','pb'],
         [null,null,null,null,null,null,null,null],
         [null,null,null,null,null,null,null,null],
         [null,null,null,null,null,null,null,null],
         [null,null,null,null,null,null,null,null],
         ['pw','pw','pw','pw','pw','pw','pw','pw'],
         ['Rw','Nw','Bw','Qw','Kw','Bw','Nw','Rw']];
         return this;
    }
}


