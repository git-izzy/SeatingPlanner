import GuestPanel from "../web_panels/guestPanel";
import TableSpecsPanel from "../web_panels/tableSpecsPanel";

import { Tab, Tabs} from "@mui/material";

import { useState } from "react";

export default function SidePanel(){

    
    const [tabIndex, setTabIndex] = useState<number>(0);

    return(
        <div>
            <Tabs value={tabIndex} onChange={(e,value)=>{setTabIndex(value); console.log(value)}}>
              <Tab label="Guests"/>
              <Tab label="Table"/>
            </Tabs>
            <GuestPanel hidden={tabIndex!==0}/>
            <TableSpecsPanel hidden={tabIndex!==1}/>
        </div>
    );
}