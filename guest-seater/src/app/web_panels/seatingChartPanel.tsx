import { Button } from "@mui/material";
import Table from "../seating_components/table";
import {CircleTable, TableObj}  from "../helper_files/tableObj";
import useMeasure from "react-use-measure";
import { useState } from "react";
// import RectReadOnly from "react-use-measure";


export default function SeatingChartPanel(){

    // have a useState with a list of tables
    const [tables, setTables] = useState<TableObj[]>([]);
    
    return(
        <div className="h-full relative">
            <Table width={0}/>
            <Button className="float-right" onClick={addTable}>
                Add Table
            </Button>
            {tables.map((t)=>{ return <Table width ={0} key={t.id}/>})}
        </div>
    );

    function addTable(){
        const tableObj = new CircleTable(40);
        setTables([...tables, tableObj])
    }
}
