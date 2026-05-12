import { JSX } from "react";
import { Dimensions, Guest, toNumber } from "./coreObjects";
import CircleTable from "../seating_components/circleTable";
import { Position } from "react-rnd";

export interface tableProps{
    DataObject:TableObj
}

export abstract class TableObj{
    static idCount = 0;

    id:number

    width:number
    height:number
    position:Position

    // boolean array - when an index = 0 _ do not render that chair
    chairArray: boolean[] =[]
    chairCount:number

    guests : Guest[] =[]

    constructor( position:Position, width:number= 100, chairCount:number = 7 ){
        this.id=TableObj.idCount;
        TableObj.idCount++;

        this.width=width;
        this.height = 0;       
        this.position=position;
        

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

    setHeight(height:number){
        if(height >0){
            this.width= this.height;
        }
    }

    setDimension(dimensions:Dimensions){
        this.setWidth(toNumber(dimensions.width));
        this.setHeight(toNumber(dimensions.height));
    }

    setPosition(pos:Position){
        this.position=pos;
    }

    setChairCount(count:number){
        this.chairCount=count;
    }

    toggleChairVis(index:number){
        this.chairArray[index] = !this.chairArray[index];
    }

    abstract toJsx():JSX.Element;

}

export class CircleTableDto extends TableObj{
    static defaultRatio = .17;
    
    toJsx(): JSX.Element {
        throw new Error("Method not implemented.");
    }
}