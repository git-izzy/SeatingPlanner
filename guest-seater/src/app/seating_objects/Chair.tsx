import useMeasure from "react-use-measure";

interface chairProps{
    visible:boolean;
    rotation: number;
    xDisplace: number;
    yDisplace: number;
    label:number;
}

export default function Chair(props:chairProps){
    const [divRef,bounds] = useMeasure()
    const maxLen = 15;
    const styles =`absolute ${props.visible?'visible':'invisible'} text-center origin-top-left
    border-black border-2 bg-gray-200 w-3/13 h-3/13 max-w-15 max-h-15 text-xs rounded`;

    return(
        <div ref = {divRef} className={styles} style={{transform: 'translate(-50%,-50%)', 
            left: props.xDisplace, top:props.yDisplace, rotate: `${props.rotation}rad`}}>
            {props.label}
        </div>
    );
    
}
