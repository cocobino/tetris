const TableRenderer =(_=>{
    const el = v=>document.createElement(v);
    const add = (p, c)=>p.appendChild(typeof c == 'string' ? el(c) : c);
    const back = (s, v)=>s.backgroundColor = v;
    return class extends Renderer{
        constructor(col, row, back){
            super(col, row, el('table'), back);
            const {base, blocks} = this;
            let {row:i} = this;
            
            while(i--){
                const curr = [], tr = add(base, 'tr');
                let j = col;blocks.push(curr);
                while(j--) curr.push(add(tr, 'td').style);
            }
        }
        clear(){this.blocks.forEach(v=>v.forEach(s=>back(s, this.back)));}
        _render(v){this.blocks.forEach((c,i)=>c.forEach((s,j)=>back(s, v[i][j])));}};  
    })();