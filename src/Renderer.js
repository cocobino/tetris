const Renderder = class {
    constructor(col , row, base, back) {
        Object.assign(this, {col, row, base, back, blocks:[]});
    }

    clear() {
        throw 'override';
    }

    render(data) {
        if(!(data instanceof Data)) throw 'invalid data'; // validation Type에 의존함
        this._render(data);
    }

    _render(data) {throw 'override';}
}