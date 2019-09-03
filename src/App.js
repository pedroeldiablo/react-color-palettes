import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette'
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import seedPalettes from './seedPalettes';
import { generatePalette } from './colorHelpers';

class App extends Component {
    findPalette(id) {
        return seedPalettes.find(function(palette){
            return palette.id === id;
        });
    }
    render() {
        return (
            <Switch>
                <Route 
                exact 
                path="/" 
                render={(routeProps) => <PaletteList  palettes={seedPalettes} {...routeProps} />} 
                />
                <Route exact path="/palette/:id"
                 render= {(routeProps) => (
                    <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))}/>
                )}  />
                <Route exact path="/palette/:paletteId/:colorId"
                 render= {() => (
                    <SingleColorPalette />
                )}  />
            </Switch>
        );
    }
}

export default App;
