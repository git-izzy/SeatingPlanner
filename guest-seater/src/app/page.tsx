'use client' 

import { Allotment} from "allotment";
import "allotment/dist/style.css";

import ControlPanel from "./web_panels/controlPanel";
import GuestPanel from "./web_panels/guestPanel";
import NoSSRSeatingPanel from "./web_panels/NoSsrSeatingPanel";
import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import TableSpecsPanel from "./web_panels/tableSpecsPanel";


export default function Home() {

  const [tabIndex, setTabIndex] = useState<number>(0);

  return (
    <div className="h-full flex flex-col">

      <ControlPanel/>

      <Allotment defaultSizes={[17,83]} className="flex-grow">

        <div>
          <Tabs value={tabIndex} onChange={(e,value)=>{setTabIndex(value); console.log(value)}}>
            <Tab label="Guests"/>
            <Tab label="Table"/>
          </Tabs>
          <GuestPanel hidden={tabIndex!==0}/>
          <TableSpecsPanel hidden={tabIndex!==1}/>
        </div>

        <NoSSRSeatingPanel/>
      </Allotment>

    </div>
  );
} 
