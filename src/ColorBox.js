import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import classNames from "classnames";

import { withStyles } from '@material-ui/styles';
import styles from './styles/ColorBoxStyles';

class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = { copied: false };
        this.changeCopyState = this.changeCopyState.bind(this);
    }
    changeCopyState(){
        this.setState({copied:true}, () => {
            setTimeout(() => this.setState({ copied: false}), 1500);
        });
    }
    render() {
        const { name, backgroundColor, moreUrl, showingFullPalette, classes } = this.props;
        const { copied } = this.state;
        
        return (
            <CopyToClipboard text={backgroundColor} onCopy={this.changeCopyState}>
                <div style={{backgroundColor: backgroundColor}} className={classes.ColorBox}>
                    <div 
                        style={{backgroundColor: backgroundColor}} 
                        className= {classNames(classes.copyOverlay, {[classes.showOverlay]:copied})}
                        />
                    <div 
                        className={classNames(classes.copyMessage, {[classes.showCopyMessage]:copied})}
                       
                    >
                        <h1>Copied</h1>
                        <p className={classes.copyText}>
                        {backgroundColor}
                        </p>
                    </div>
                    <div>
                        <div className={classes.boxContent}>
                            <span className={classes.copyText}>{name}</span>
                        </div>
                        <button className={classes.copyButton}>Copy</button>
                    </div>
                    {showingFullPalette && (
                    <Link to={moreUrl} onClick={ e => e.stopPropagation()}>
                        <span className={classes.seeMore}>More</span>
                    </Link>
                    )}
                </div>
            </CopyToClipboard>
        );
    }
}

export default withStyles(styles)(ColorBox);
