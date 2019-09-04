export default {
    Palette: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
    },
    
    PaletteColors: {
        height: "90%",
    },
    
    goBack: {
        width: "20%",
        height: "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
        backgroundColor: "black",
        "& a": {
            color: "white",
            width: "100px",
            height: "30px",
            position: "absolute",
            display: "inline-block",
            top: "calc(50% - 15px)",
            left: "calc(50% - 50px)",
            textAlign: "center",
            lineHeight: "30px",
            outline: "none",
            backgroundColor: "rgba(255,255,255, 0.3)",
            textTransform: "uppercase",
            border: "none",
            textDecoration: "none",
        }, 
    }, 

}
