import React, { Component } from 'react';
import Row from '../row';
import ErrorBoundry from '../error-boundry';
import { PlanetList, PlanetDetails } from '../sw-components';

export default class PlanetsPage extends Component { 

    state = { 
        selectedItem : null,
    };

    onItemSelected = (id) => { 
        this.setState({
            selectedItem: id
        })
    }

    render() { 

        const itemList = (
            <ErrorBoundry>
                <PlanetList
                    onItemSelected={this.onItemSelected}            
                />
            </ErrorBoundry>
        );

        const planetDetails = (
            <ErrorBoundry>
                <PlanetDetails itemId={this.state.selectedItem} />
            </ErrorBoundry>
        );

        return (
            <Row left={itemList} right={planetDetails}/>
        );
    }
    

}