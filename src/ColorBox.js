import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
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
        const { name, backgroundColor, paletteId, id, moreUrl } = this.props;
        const { copied } = this.state;
        return (
            <CopyToClipboard text={backgroundColor} onCopy={this.changeCopyState}>
                <div style={{backgroundColor: backgroundColor}} className="ColorBox">
                    <div style={{backgroundColor: backgroundColor}} className={`copy-overlay ${copied  && "show"}`} />
                    <div className={`copy-message ${copied  && "show"}`}>
                        <h1>Copied</h1>
                        <p>{backgroundColor}</p>
                    </div>
                    <div className="copy-container">
                        <div className="box-content">
                            <span>{name}</span>
                        </div>
                        <button className="copy-button">Copy</button>
                    </div>
                    <Link to={`/palette/${paletteId}/${id}`} onClick={ e => e.stopPropagation()}>
                        <span className="see-more">More</span>
                    </Link>
                </div>
            </CopyToClipboard>
        );
    }
}

export default ColorBox;
