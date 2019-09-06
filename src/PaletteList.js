import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Check from '@material-ui/icons/Check';
import Close from '@material-ui/icons/Close';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import styles from './styles/PaletteListStyles'

class PaletteList extends Component {
    constructor(props){
        super(props);
        this.state = {
            deleteDialogOpen : false,
            deletingId: ""
        }
        this.openDeleteDialog = this.openDeleteDialog.bind(this);
        this.closeDeleteDialog = this.closeDeleteDialog.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.goToPalette = this.goToPalette.bind(this);
    }

    openDeleteDialog(id) {
        this.setState({ deleteDialogOpen: true , deletingId: id });
    }

    closeDeleteDialog() {
        this.setState({ deleteDialogOpen: false, deletingId: ""});
    }
    goToPalette(id) {
        this.props.history.push(`/palette/${id}`);
       
    }

    handleDelete() {
        this.props.deletePalette(this.state.deletingId);
        this.closeDeleteDialog();
    }
    render() {
        const { deleteDialogOpen, deletingId } = this.state;
        const { palettes, classes, deletePalette } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React Palettes</h1>
                        <Link to="/palette/new">New Palette</Link>
                    </nav>
                   
                        <TransitionGroup className={classes.palettes}>
                        {palettes.map(palette => (
                            <CSSTransition key={palette.id} classNames='fade' timeout={500}>
                            <MiniPalette 
                            {...palette} 
                             goToPalette={this.goToPalette}
                             openDeleteDialog={this.openDeleteDialog}
                             key={palette.id}
                             id={palette.id}
                             />
                             </CSSTransition>
                        ))}
                        </TransitionGroup>
                </div>  
                <Dialog open={deleteDialogOpen} onClose={this.closeDeleteDialog} aria-labelledby="delete-palette-confirmation">
                    <DialogTitle id="delete-palette-confirmation">Delete this palette?</DialogTitle>
                    <List>
                        <ListItem button onClick={this.handleDelete}>
                            <ListItemAvatar>
                            <Avatar 
                            style={{ backgroundColor: blue[100], color: blue[600]}}
                            className={classes.avatar}>
                                <Check />
                            </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Delete palette" />
                        </ListItem>
                        <ListItem button onClick={this.closeDeleteDialog}>
                        <ListItemAvatar>
                            <Avatar 
                                style={{ backgroundColor: red[100], color: red[600]}}
                            className={classes.avatar}>
                            <Close />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Cancel"/>
                        </ListItem>
                    </List>
                </Dialog>

            </div>
        );

    }
}

export default withStyles(styles)(PaletteList);
