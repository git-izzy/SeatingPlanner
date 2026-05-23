import GuestPanel from "./guestPanel";

interface  panelProps{
    hidden:boolean
};

export default function TableSpecsPanel(props:panelProps){
    return (
    <div hidden ={props.hidden}>
        Table
    </div>);
};

