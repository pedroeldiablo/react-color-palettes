export default {
    root: {
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        "&:hover svg": {
            opacity: "1"
           
        }

    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        color: "black",
        paddingTop: "0.5rem",
        fontSize: "1rem",
        position: "relative"

    },
    emoji: {
        marginLeft: "0.5rem",
        fontSize: "1.5rem"

    },
    colors: {
        backgroundColor: "#dae1e4",
        height: "100px",
        width: "100%",
        borderRadius: "5px", 
        overflow: "hidden"

    },
    miniColor: {

        height: "25%",
        width: "20%",
        display: "inline-block",
        margin: "0 auto",
        marginBottom: "-3.5px"
    },
    delete: {

    }, 
    deleteIcon: {
        color: "white",
        backgroundColor: "#eb3d30",
        width: "20px",
        height: "20px",
        position: "absolute", 
        top: "0",
        right: "0", 
        padding: "5px",
        // zIndex: "1"
        opacity: "0",
    }
};
