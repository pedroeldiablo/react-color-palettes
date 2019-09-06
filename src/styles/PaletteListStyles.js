import sizes from './sizes';

export default {
    root: {
        backgroundColor: "blue",
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"

    }, 
    container: {
        width: "80%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap"

    }, 
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        "& a": {
            color: "white",
        }

    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "20px",

   
    [sizes.down("md")]: {
        gridTemplateColumns: "repeat(2, 50%)",
    },
    [sizes.down("xs")]: {
        gridTemplateColumns: "repeat(1, 100%)",
    },
    // [sizes.down("xs")]: {
    //     gridTemplateColumns: "repeat(3, 30%)",
    // }
    }   
}
