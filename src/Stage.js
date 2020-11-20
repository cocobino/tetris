const Stage = class {
    init(listener) {
        this.listener = listener;
    }

    clear() {
        this.stage =0;
        this.next();
    }

    _speed() {this.speed = 500 - 450 * this.stage / Stage.maxStage;}
    _count() {this.count = 10+3*this.stage;}

    next() {
        if(this.stage__ < Stage.maxStage) {
            this._speed();
            this._count();
        }
    }

    [Symbol.toPrimitive](hint) {
        return `<div>Stage ${this.stage}</div>`;
    }
};

Stage.maxStage = 20;