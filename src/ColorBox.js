import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import chroma from 'chroma-js';
import './ColorBox.css';
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
        const { name, backgroundColor, moreUrl, showLink } = this.props;
        const { copied } = this.state;
        const isDarkColor = (chroma(backgroundColor).luminance() <= 0.2);
        const isLightColor = (chroma(backgroundColor).luminance() >= 0.65);
        
        // const isDarkColor = (chroma(backgroundColor).hcl()[2] <= 50);
        return (
            <CopyToClipboard text={backgroundColor} onCopy={this.changeCopyState}>
                <div style={{backgroundColor: backgroundColor}} className="ColorBox">
                    <div style={{backgroundColor: backgroundColor}} className={`copy-overlay ${copied  && "show"}`} />
                    <div className={`copy-message ${copied  && "show"}`}>
                        <h1>Copied</h1>
                        <p className={isDarkColor && "light-text"}>{backgroundColor}</p>
                    </div>
                    <div className="copy-container">
                        <div className="box-content">
                            <span className={isDarkColor && "light-text"}>{name}</span>
                        </div>
                        <button className={`copy-button ${isLightColor && "dark-text"}`}>Copy</button>
                    </div>
                    {showLink && (
                    <Link to={moreUrl} onClick={ e => e.stopPropagation()}>
                        <span className={`see-more ${isLightColor && "dark-text"}`}>More</span>
                    </Link>
                    )}
                </div>
            </CopyToClipboard>
        );
    }
}

export default ColorBox;
