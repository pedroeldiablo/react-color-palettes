import chroma from 'chroma-js';
import sizes from './sizes';

const styles= {
    root: {
        width: "20%",
        height: "25%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-5px",

        "&:hover svg": {
            color: "white",
            transform: "scale(1.5)"
        },
        [sizes.down("md")]: {
            width: "33.3%",
            height: props => props.showingFullPalette ? "20%" : "20%",
        },
        [sizes.down("sm")]: {
            width: "50%",
            height: props => props.showingFullPalette ? "20%" : "20%",
        },
        [sizes.down("xs")]: {
            width: "100%",
            height: props => props.showingFullPalette ? "10%" : "10%",
        }
    },
    boxContent: {
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: "0px",
        padding: "10px",
        textTransform: "uppercase",
        letterSpacing: "0.05em",
        display: "flex",
        justifyContent: "space-between",
        color: props => chroma(props.color).luminance() <= 0.2 ?  "white" : "black",
    },
    deleteIcon: {
        transition: "all 0.3s ease-in-out",
    }

};

export default styles;
