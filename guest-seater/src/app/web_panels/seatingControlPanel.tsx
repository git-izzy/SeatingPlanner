import { Button } from "@mui/material";

interface seatingControlProps{
    addTable: ()=>void;
};

export default function SeatingControlPanel(props:seatingControlProps){
    return(
        <div className="bg-gray-500 p-1 border-gray-600 border-1">
            <Button onClick={props.addTable}>
                + Circle
            </Button>
            <Button color='error'>Test</Button>
        </div>
    );
}