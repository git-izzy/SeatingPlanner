import { RectReadOnly } from "react-use-measure";
import Table from "../seating_components/table";
import Chair from "../seating_components/Chair";

interface panelProps{
    bounds:RectReadOnly
}

const chairDist=3;


export default function TablePanel(props:panelProps){
    return(
        <>
            <Table bound={props.bounds} circle={true} />
            <Chair xDisplace={60} yDisplace={-60} rotation={45} visible={true}/>
        </>
    );
}