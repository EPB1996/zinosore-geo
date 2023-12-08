export interface Line {
    originx : number;
    originy : number;
    arrivex :number;
    arrivey :number;
    stroke_color:string;
    stroke_width :number;
}

export class LineModel implements Line {
    originx: number;
    originy: number;
    arrivex: number;
    arrivey: number;
    stroke_color: string;
    stroke_width: number;

    constructor(originx: number, originy: number, arrivex: number, arrivey: number, stroke_color: string, stroke_width: number) {
        this.originx = originx;
        this.originy = originy;
        this.arrivex = arrivex;
        this.arrivey = arrivey;
        this.stroke_color = stroke_color;
        this.stroke_width = stroke_width;
    }
}
