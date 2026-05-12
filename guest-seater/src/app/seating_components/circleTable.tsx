import { useState } from "react";
import { Position, ResizableDelta, Rnd} from "react-rnd";
import Chair from "./Chair";
import { tableProps } from "../helper_files/tableObj";
import * as coreObjects from "../helper_files/coreObjects"



export default function CircleTable(props:tableProps){
    const tableDto = props.DataObject;

    const baseWidth = tableDto.width;
    const chairNum =tableDto.chairCount;

    const [dimensions, setDimensions] = useState<coreObjects.Dimensions>({ width: baseWidth, height: baseWidth});
    const [position, setPosition] = useState<Position>(tableDto.position);
    
    return(
        //set bounds + on drag & resize 
        <Rnd bounds="parent" lockAspectRatio={true} size={dimensions}
        onDragStop={(event,data)=>{ setPosition({x:data.x, y:data.y}) }}
        onResizeStop={onResizeStop}
        cancel="Chair">
            <div className="bg-blue-300 border-2 border-black h-full relative rounded-full">
                {/* 
                Make chairs not interactable
                Arrange them evenly throughout table
                Figure out how to modularly make 
                */}
                
                {tableDto.chairArray.map((vis,index)=>{return chairGen(index,vis)})}
            </div>
        </Rnd>
    );
    
    
    function chairGen(index:number, visible:boolean)  {
        //Convert the chair's index in array --> angle (in radian)
        const theta = (2* Math.PI/chairNum)*(index);
        const width = coreObjects.toNumber(dimensions.width);
        const height = coreObjects.toNumber(dimensions.height);

        const xDis = (Math.cos(theta) * 1.3 * width/2) + width/2; 
        const yDis = (Math.sin(theta) * 1.3 * -height/2) + height/2;

        
        return <Chair visible={visible} rotation={-theta} xDisplace={xDis} yDisplace={yDis} label={index} key={index}/>;
    }

    function onResizeStop(e:unknown, mouse:unknown, ref: HTMLElement, delta:ResizableDelta, position:Position){
        const dim = ref.style;
        setDimensions({width: dim.width, height : dim.width});
        tableDto.setWidth(coreObjects.toNumber(dim.width));
    }
}
