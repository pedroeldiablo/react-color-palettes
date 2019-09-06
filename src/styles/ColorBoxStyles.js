import chroma from 'chroma-js';

export default {
    ColorBox: {
        width: "20%",
        height: props => props.showingFullPalette ? "25%" : "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
        "&:hover button": {
            opacity:" 1",
            transition: "0.5s",
        },
        "@media (max-width: 900px)": {
            width: "50%",
        },
        "@media (max-width: 500px)": {
            width: "100%",
        }
    },

    copyText: {
        color: props => chroma(props.backgroundColor).luminance() >= 0.65  ? "black" : "white",
    },
    colorName: {
        color: props => chroma(props.backgroundColor).luminance() <= 0.2 ?  "white" : "black",
    },
    seeMore: {
        color: props => chroma(props.backgroundColor).luminance() >= 0.65  ? "black" : "white",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        position: "absolute",
        border: "none",
        right: "0",
        bottom: "0",
        width: "60px",
        height: "30px",
        lineHeight: "30px",
        textAlign: "center",
        texTransform: "uppercase",
    },
    copyButton: {
        color: props => chroma(props.backgroundColor).luminance() >= 0.65  ? "black" : "white",
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
        opacity: "0",
    }, 
    boxContent: {
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: "0px",
        padding: "10px",
        color: "rgba(0,0,0,1)",
        textTransform: "uppercase",
        letterSpacing: "0.05em",
    },
    copyOverlay: {
        opacity: "0",
        zIndex: "0",
        width: "100%",
        height: "100%",
        transition: "transform 0.6s ease-in-out",
        transform: "scale(0.1)",
    }, 
    showOverlay: {
        opacity: "1",
        transform: "scale(50)",
        zIndex: "1",
        position: "absolute",
    },
    copyMessage: {
        position: "fixed",
        left: "0",
        right: "0",
        top: "0",
        bottom: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "2rem",
        transform: "scale(0.1)",
        opacity: "0",
    },
    showCopyMessage: {
        opacity: "1",
        transform: "scale(1)",
        zIndex: "2",
        transitionDelay: "0.3s",
        "& h1": {
        fontWeight: "400",
        fontSize: "4rem",
        textShadow: "1px 2px rgba(255,255,255,1)",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        width: "100%",
        textAlign: "center",
        marginBottom: "0",
        padding: "1rem",
        }, 
        "& p": {
            fontSize: "2rem",
            fontWeight: "400",
        }
    }

}
