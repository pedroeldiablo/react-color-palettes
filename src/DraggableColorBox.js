import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import { withStyles } from '@material-ui/styles';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';


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

const DraggableColorBox = SortableElement(props => {
    const { classes,name, color, handleClick } = props;
    return (
        <div 
        className={classes.root}
         style={{ backgroundColor: color}}
         >
            <div className={classes.boxContent}>
                <span>{name}</span>
                <DeleteOutlined 
                className={classes.deleteIcon}
                onClick={handleClick}
                 />
            </div>
        </div>
    );
});

export default withStyles(styles)(DraggableColorBox);
