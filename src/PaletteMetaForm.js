import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

class PaletteMetaForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            newPaletteName: ""
        }
        this.handleChange = this.handleChange.bind(this);
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
     
    render() {
        // const { classes } = this.props;
        const { open, newPaletteName } = this.state;
        
        return (
            <div>
                <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                    Open form dialog
                </Button>
                <Dialog open={open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Name This Palette</DialogTitle>
                    <ValidatorForm onSubmit={() => this.props.handleSubmit(newPaletteName)}>
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
                            <Button onClick={this.handleClose} color="primary">
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