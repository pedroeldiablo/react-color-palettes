import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css'

class PaletteMetaForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stage: "nameForm",
            newPaletteName: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.updateSaveStage = this.updateSaveStage.bind(this);
        this.savePalette = this.savePalette.bind(this);
        
    }

    componentDidMount() {
        ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
          this.props.palettes.every(
            ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
          )
        );
    }

    handleChange(evt) {
        this.setState({
          [evt.target.name]: evt.target.value
        });
    }

    handleClickOpen = () => {
    this.setState({ open: true});
    }

    handleClose = () => {
    this.setState({ open: false});
    }

    updateSaveStage = () => {
        this.setState({ stage: "emojiForm"});
        
    }

    savePalette(newEmoji){
        const newPalette = {
            paletteName : this.state.newPaletteName,
            emoji: newEmoji.native
        }
        this.props.handleSubmit(newPalette);
        this.setState({ stage: ""});
    }
     
    render() {
        const { hideForm } = this.props;
        const { newPaletteName } = this.state;
        
        return (
            <div>
            <Dialog open={this.state.stage === "emojiForm"} onClose={hideForm}>
            <DialogTitle id="form-dialog-title">Pick an emoji for this palette</DialogTitle>
            <Picker set='emojione' onSelect={this.savePalette}/>
            </Dialog> 
            <Dialog open={this.state.stage === "nameForm"} onClose={hideForm} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Name This Palette</DialogTitle>
                <ValidatorForm onSubmit={this.updateSaveStage}>
                    <DialogContent>
                        <DialogContentText>
                            Add a unique name for this palette.
                        </DialogContentText>
                       
                        <TextValidator
                            label='Palette Name'
                            value={newPaletteName}
                            name='newPaletteName'
                            fullWidth
                            margin="normal"
                            onChange={this.handleChange}
                            validators={["required", "isPaletteNameUnique"]}
                            errorMessages={["Enter Palette Name", "Name already used"]}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={hideForm} color="primary">
                            Cancel
                        </Button>
                        <Button variant='contained' color='primary' type='submit'>
                        Save Palette
                        </Button>
                    </DialogActions>
                </ValidatorForm>
            </Dialog>
            </div>
        );
    }
}

export default PaletteMetaForm;
