import { useState } from "react";
import { Rnd } from "react-rnd";
import { RectReadOnly } from "react-use-measure";
import Chair from "./Chair";

interface tableProps{
    bound:RectReadOnly;
    circle?:boolean;
}

type Dimensions={
    height:number | string;
    width:number | string;
}

type Position={
    x:number;
    y:number;
}


export default function Table({bound, circle}:tableProps){

    const baseHeight = 50;
    const baseWidth = 50;
    const chairNum =5;

    const [dimensions, setDimensions] = useState<Dimensions>({ width: baseWidth, height: baseHeight});
    const [position, setPosition] = useState<Position>()

    function styles():string {
        let className ="bg-blue-300 border-2 border-black h-full relative"
        if(circle){
            className += " rounded-full"
        }
        return className
    }

    function chairDist(index:number)  {
        const theta = (2* Math.PI/chairNum)*(index-1);
        // console.log(`Dimension Width ${dimensions.width}`);
        const width = toNumber(dimensions.width);
        const height = toNumber(dimensions.height);

        let rotate = -theta
        if( theta > Math.PI/2 &&  theta  < 3*Math.PI/2){
        // if( theta > Math.PI/2 &&  theta  < 3*Math.PI/2){
            rotate = theta;
        }

        const xDis = (Math.cos(theta) * width/2) + width/2; 
        const yDis = (Math.sin(theta) * -height/2) + width/2;
        return <Chair visible={true} rotation={rotate} xDisplace={xDis} yDisplace={yDis} label={index}/>;
    }

    return(
        //set bounds + on drag & resize 
        <Rnd bounds="parent" lockAspectRatio={circle} size={dimensions}
            onDragStop={(event,data)=>{ setPosition({x:data.x, y:data.y}) }}
            onResizeStop={(e, direction, ref)=>{setDimensions({height: ref.style.height, width: ref.style.width})}}
            cancel="Chair">
            <div className={styles()}>
                {/* 
                Make chairs not interactable
                Arrange them evenly throughout table
                    Figure out how to modularly make 
                    */}
                
                {chairDist(1)}
                {chairDist(2)}
                {chairDist(3)}
                {chairDist(4)}
                {chairDist(5)}
            </div>
        </Rnd>
    )

}


function toNumber(value: number | string): number {
    if (typeof value === "number") {
        return value;
    }

    const parsed = parseFloat(value);
    return Number.isNaN(parsed) ? 0 : parsed;
}