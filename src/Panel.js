const Panel = class {
    static get(game, init, render) {
        const p = new Panel();
        return p.init(game, init(game), render), p;
    }

    init(game, base, r) {
        Object.assign(this, {base, game, r});
    }

    render(v){this.r(this.game), v;}
}

Panel.get(game, 
    game => self('#stageIntro'),
    (game, v) => {
        self('#stageIntro .stage').innerHTML = v;
        setTimeout(_=>game.setState(Game.play),500);
    });