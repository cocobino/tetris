const Data = class extends Array{
    
    constructor(r, c){
        super();
        Object.assign(this, {r, c});
    }
    
    cell(r, c, color, test) {
        if(r > this.r || c > this.c || r < 0 || c < 0 || color == '0') return this;
        const row = this[r] || (this[r] = []);
        if(color && row[c]) test.isIntersacted = true;
        row[c] = color;
        return this;
    }
    
    row(row, ...color){return color.forEach((v, i)=>this.cell(row, i, v)), this;}
    all(...rows){return rows.forEach((v, i)=>this.row(i, ...v)), this;}
};