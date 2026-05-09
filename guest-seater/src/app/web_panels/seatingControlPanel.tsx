import { JSX } from "react";

interface seatingControlProps{
    addTable: ()=>void;
};

export default function SeatingControlPanel(props:seatingControlProps){
    return(
        <div className="bg-gray-500 p-1">
            <button className="btn-ctrl" onClick={props.addTable}>
                + Circle
            </button>
        </div>
    );
}