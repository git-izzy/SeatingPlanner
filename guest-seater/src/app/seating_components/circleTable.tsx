import { useState } from "react";
import { ResizableDelta, Rnd, RndResizeCallback } from "react-rnd";
import useMeasure, { RectReadOnly } from "react-use-measure";
import Chair from "./Chair";
import { tableProps } from "../helper_files/tableObj";

type Dimensions={
    height:number | string;
    width:number | string;
}

type Position={
    x:number;
    y:number;
}



export default function CircleTable(props:tableProps){
    const tableDto = props.DataObject;

    const baseWidth = tableDto.width;
    const chairNum =tableDto.chairCount;

    const [dimensions, setDimensions] = useState<Dimensions>({ width: baseWidth, height: baseWidth});
    const [position, setPosition] = useState<Position>();
    
    function styles():string {
        let className ="bg-blue-300 border-2 border-black h-full relative"
        className += " rounded-full"
        return className
    }
    
    return(
        //set bounds + on drag & resize 
        <Rnd bounds="parent" lockAspectRatio={true} size={dimensions}
        onDragStop={(event,data)=>{ setPosition({x:data.x, y:data.y}) }}
        onResizeStop={onResizeStop}
        cancel="Chair">
            <div className={styles()}>
                {/* 
                Make chairs not interactable
                Arrange them evenly throughout table
                Figure out how to modularly make 
                */}
                
                {tableDto.chairArray.map((vis,index)=>{return chairDist(index,vis)})}
            </div>
        </Rnd>
    );
    
    
    function chairDist(index:number, visible:boolean)  {
        //Convert the chair's index in array --> angle (in radian)
        const theta = (2* Math.PI/chairNum)*(index);
        const width = toNumber(dimensions.width);
        const height = toNumber(dimensions.height);

        const xDis = (Math.cos(theta) * 1.3 * width/2) + width/2; 
        const yDis = (Math.sin(theta) * 1.3 * -height/2) + height/2;

        
        return <Chair visible={visible} rotation={-theta} xDisplace={xDis} yDisplace={yDis} label={index} key={index}/>;
    }

    function onResizeStop(e:unknown, mouse:unknown, ref: HTMLElement, delta:ResizableDelta, position:Position){
        const dim = ref.style;
        setDimensions({width: dim.width, height : dim.width});
        tableDto.setWidth(toNumber(dim.width));
    }
}


function toNumber(value: number | string): number {
    if (typeof value === "number") {
        return value;
    }

    const parsed = parseFloat(value);
    return Number.isNaN(parsed) ? 0 : parsed;
}