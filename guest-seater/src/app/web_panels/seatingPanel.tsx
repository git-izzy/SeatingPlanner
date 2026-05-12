import { Button } from "@mui/material";
import CircleTable from "../seating_components/circleTable";
import {CircleTableDto, TableObj}  from "../helper_files/tableObj";
import useMeasure from "react-use-measure";
import { useState } from "react";
import SeatingControlPanel from "./seatingControlPanel";
// import RectReadOnly from "react-use-measure";


export default function SeatingPanel(){

    // have a useState with a list of tables
    const [tables, setTables] = useState<TableObj[]>([]);
    
    return(
        <div className="h-full">
            <SeatingControlPanel addTable={addTable}/>
            <div className="h-full relative border-2">
                {tables.map((t, i)=>{ return <CircleTable DataObject ={t} key={t.id}/>})}
            </div>
        </div>
    );

    function addTable(){
        //Algorithm to find first available open space (way down the line me thinks)
        const tableObj = new CircleTableDto({x:0,y:0});
        setTables([...tables, tableObj])
    }
}
