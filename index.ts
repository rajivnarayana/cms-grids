import {Request, Response } from "express";
import * as jade from "jade";
import {join} from "path";

export function render(req : Request, res : Response, next) {
    if(res.grid) {
        res.html = Object.assign({content : jade.renderFile(join(__dirname,'grid.jade'), {grid: res.grid})}, res.html);
    }
    return next();
}

export class Row  {
    public columns : String|HyperLink[];
    public actions : HyperLink[]
}

export type HyperLink = {
    title : String;
    href : String;
    attributes : any;
}

export class Grid {
    public header : String;
    public headerRow : String[];
    public rows : Row[];
    public footer : String;
}
