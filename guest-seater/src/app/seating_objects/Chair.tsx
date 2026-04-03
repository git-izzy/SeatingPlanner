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
    const styles =`absolute ${props.visible?'visible':'invisible'} text-center
    border-black border-2 bg-gray-200 w-3/13 h-3/13 max-w-15 max-h-15 text-xs `;
    const added = bounds?displaceForWidth():{xDis:0,yDis:0};

    return(
        <div ref = {divRef} className={styles} style={{left: props.xDisplace + added.xDis, top:props.yDisplace +added.yDis, rotate: `${props.rotation}rad`}}>
            {props.label}
        </div>
    );
    
    function displaceForWidth() :{xDis:number,yDis:number }{
        let xDis=0;
        let yDis=0;
        const deg = props.rotation;
        if(deg < Math.PI/2 ){
            xDis+= bounds.width/2;
        }

        return {xDis,yDis}
    }
}
