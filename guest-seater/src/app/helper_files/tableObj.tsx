import { JSX } from "react";
import { Guest } from "./coreObjects";

export interface TableProps{
    width:number;
    chairCount?:number;
}

export abstract class TableObj{
    static idCount = 0;

    id:number
    width:number
    chairCount:number
    // boolean array - when an index = 0 _ do not render that chair
    chairArray: boolean[] =[]
    guests : Guest[] =[]

    constructor(width:number, chairCount:number = 0 ){
        this.id=TableObj.idCount;
        TableObj.idCount++;

        this.width=width;
        this.chairCount=chairCount;
        for (let i = 0; i < chairCount; i++) {
            this.chairArray.push(true);
        }
    }

    setWidth(width:number){
        if(width >0){
            this.width= width;
        }
    }

    setChairCount(count:number){
        this.chairCount=count;
    }

    toggleChairVis(index:number){
        this.chairArray[index] = !this.chairArray[index];
    }

    abstract toJsx():JSX.Element;

}

export class CircleTable extends TableObj{
    static defaultRatio = .17;
    
    toJsx(): JSX.Element {
        throw new Error("Method not implemented.");
    }
}