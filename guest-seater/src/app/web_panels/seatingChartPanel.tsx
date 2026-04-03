import Table from "../seating_objects/table";
import useMeasure from "react-use-measure";
// import RectReadOnly from "react-use-measure";


export default function SeatingChartPanel(){

    const [divRef,bounds] = useMeasure()
    // have a useState with a list of tables

    
    return(
        <div className="h-full relative" ref={divRef} >
            <Table bound={bounds} circle={true}/>
        </div>
    );
}