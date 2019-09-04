import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { withStyles } from '@material-ui/styles';
import './Palette.css';

const styles = {
    Palette: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
    },
    
    PaletteColors: {
        height: "90%",
    },
    
    PaletteFooter: {
        backgroundColor: "rgba(255, 255, 255, 1)",
        height: "5vh",
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        fontWeight: "bold",
        marginLeft: "auto",
    },
    
    emoji: {
        fontSize: "1.5rem",
        margin: "0 1rem",
    },

}

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = { level: 500, format: "hex" };
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }
    changeLevel(level) {
        this.setState({level});
    }
    changeFormat(val){
        this.setState({ format: val });
    }
    render() {
        const {colors, paletteName, emoji, id } = this.props.palette;
        const {classes} = this.props;
        const {level, format } = this.state;
        const colorBoxes = colors[level].map(color => (
            <ColorBox 
            backgroundColor={color[format]} 
            name={color.name} 
            key={color.id} 
            moreUrl= {`/palette/${id}/${color.id}`}
            showLink
            showingFullPalette
            />
        ))
        return (
            <div className={classes.Palette}>
                <Navbar level={level} 
                changeLevel={this.changeLevel} 
                handleFormatChange={this.changeFormat}
                showingAllColors
            />
                <div className={classes.PaletteColors}>
                {colorBoxes}
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji}/>
            </div>
        );
    }
}

export default withStyles(styles)(Palette);
