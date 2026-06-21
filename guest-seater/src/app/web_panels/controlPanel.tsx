import { Box } from "@mui/material"

export default function ControlPanel(){
    return(
        // <div className="flex gap-5 p-1 border-b-2">
        <Box sx={{'display':'flex', 'gap':5, 'padding':1, 'borderBottom':2}}> 
            <h2 className="font-bold">Guest Seater</h2>
            <div>
                Number of attendees: 
                <input type="text" className="bg-gray-300 border"/>
            </div>
            <div>
                Upload Guest List: 
                <input type="file" className="bg-gray-300 border" />
            </div>
        </Box>
        // </div>

    );
}