export  class Cell{
    constructor(x,y)
    {
        this.element = document.createElement('div');
    
        this.color;
        this.figure;
        this.x = x;
        this.y = y;
    }

    setStyles(){
        this.element.classList.add('cell');
        this.element.style.width = '80px';
        this.element.style.height = '80px';
        this.element.style.display = 'flex'
        this.element.style.alignItems = 'center'
        this.element.style.justifyContent = 'center';
        //определение цвета для ячейки
        this.color = this.x % 2 === 0
            ? this.y % 2 === 0? 'w': 'b'
            : this.y % 2 === 0? 'b': 'w';
        if(this.color === 'b')
            this.element.style.backgroundColor = '#964B00';
    }

    setFigure(figure){
        this.figure = figure;
        this.figure.MoveToCell(this.x, this.y);
        this.element.appendChild(figure.element);
    }
    removeFigure(){
        if(this.figure == null)
            return;
        this.figure.MoveToCell(null,null);
        this.element.removeChild(this.figure.element);
        this.figure = null;
    }
}