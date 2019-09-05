import React, { Component } from 'react';
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ChromePicker } from "react-color";
import DraggableColorList from './DraggableColorList';
import arrayMove from 'array-move';
import PaletteFormNav from './PaletteFormNav';


class  ColorPickerForm extends Component {
    constructor(props){
        super(props);
        this.state= {
            currentColor: "green",
            newColorName: "",
        }
        this.updateCurrentColor = this.updateCurrentColor.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({
          [evt.target.name]: evt.target.value
        });
      }

    updateCurrentColor(newColor) {
        this.setState({ currentColor: newColor.hex });
      }

    handleSubmit() {
        const newColor = {
            color: this.state.currentColor,
            name: this.state.newColorName
          };
          this.props.addNewColor(newColor);
          this.setState({ newColorName: ""});
    }
    
    render() {
        const {paletteIsFull} = this.props;
        const { currentColor, newColorName } = this.state;
        return (
            <div>
                <ChromePicker
                    color={currentColor}
                    onChangeComplete={this.updateCurrentColor}
                />
                <ValidatorForm onSubmit={this.handleSubmit} ref='form'>
                    <TextValidator
                        value={newColorName}
                        name='newColorName'
                        onChange={this.handleChange}
                        validators={["required", "isColorNameUnique", "isColorUnique"]}
                        errorMessages={[
                        "Enter a color name",
                        "Color name must be unique",
                        "Color already used!"
                        ]}
                    />
                    <Button
                        variant='contained'
                        type='submit'
                        color='primary'
                        disabled={paletteIsFull}
                        style={{ backgroundColor: paletteIsFull ? "grey" : currentColor }}
                    >
                        {paletteIsFull ? "Palette is full" : "Add Color"}
                    </Button>
                </ValidatorForm>               
            </div>
        )
    }
}

export default ColorPickerForm;
