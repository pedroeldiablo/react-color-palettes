const styles= {
    root: {
        width: "20%",
        height: "25%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",

        "&:hover svg": {
            color: "white",
            transform: "scale(1.5)"
        }
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
        display: "flex",
        justifyContent: "space-between",
    },
    deleteIcon: {
        transition: "all 0.3s ease-in-out",
    }

};

export default styles;