export default {
    Navbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "6vh",
        "& .MuiInput-root": {
            width: "100%",
        }
    },

    selectContainer: {
        minWidth: "30ch",
        marginLeft: "auto",
        marginRight: "1rem",
    },
    
    logo: {
        marginRight: "15px",
        padding: "0 13px",
        fontSize: "22px",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyItems: "center",
        "& a": {
            textDecoration: "none", 
        }
    },
    
    slider: {
        width: "30%",
        maxWidth: "340px",
        minWidth: "200px",
        margin: "0 10px",
        display: "inline-block",

        "& .rc-slider-track": {
            backgroundColor: "transparent",
        },
        
        "& .rc-slider-rail": {
            height: "8px",
        },
        
        "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:hover, .rc-slider-handle:focus": {
            backgroundColor: "green",
            outline: "none",
            border: "2px solid green",
            boxShadow: "none",
            width: "13px",
            marginLeft: "-7px",
            marginTop: "-3px",
        },         
    },
    sliderContainer: {
        display: "flex",
        padding: "0 5px",
        "& span": {
            display: "flex",
            paddingRight: "5px",
        }

    }
}
