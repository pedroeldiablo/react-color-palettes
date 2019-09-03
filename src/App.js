import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette'
import seedPalettes from './seedPalettes';
import { generatePalette } from './colorHelpers';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" render={() => <h1>Palette List Goes here</h1>} />
                <Route path="/palette/:id" render={() => <h1>Palette 0</h1>}  />

            </Switch>
           
            // <div>
            //   <Palette palette={generatePalette(seedPalettes[4])}/>
            // </div>
        );
    }
}

export default App;
