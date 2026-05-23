
interface panelProps{
    hidden:boolean
}

export default function GuestPanel(props:panelProps){
    return(
        <div className="bg-gray-400 border-l-2 h-full" hidden={props.hidden}>
            <h2 className="text-center">Guest List</h2>
        </div>
    );
}