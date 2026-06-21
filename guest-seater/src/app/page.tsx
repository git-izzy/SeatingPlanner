'use client' 

import { Allotment} from "allotment";
import "allotment/dist/style.css";

import ControlPanel from "./web_panels/controlPanel";

import NoSSRSeatingPanel from "./web_panels/NoSsrSeatingPanel";


import { Themes } from "./muiThemes";
import { ThemeProvider } from "@mui/material";
import SidePanel from "./web_panels/sidePanel";


export default function Home() {


  return (
    <div className="h-full flex flex-col">
      <ThemeProvider theme={Themes}>
        <ControlPanel/>

        <Allotment defaultSizes={[17,83]} className="flex-grow">

          <SidePanel/>

          <NoSSRSeatingPanel/>
        </Allotment>

      </ThemeProvider>

    </div>
  );
} 
