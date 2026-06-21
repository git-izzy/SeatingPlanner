
import { createTheme } from "@mui/material"

export const Themes = createTheme({
    palette:{
        primary:{
            main: '#65ag44',
        },
        secondary:{
            main: '#08ag44'
        }
        
    },

    components:{
        MuiButtonBase:{
            defaultProps:{
                disableRipple: true,
            },
        },
        MuiButton:{
            defaultProps:{
                variant:'contained',
                // color:'primary',
                sx:{
                    "&:hover":{
                        color:'info'
                    }
                }
            }
        }
    },

    typography:{
        fontFamily:'var(--font-inter), sans-serif'
    }
});