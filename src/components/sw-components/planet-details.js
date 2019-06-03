import React from 'react';
import Record from '../record';
import ItemDetails from '../item-details';
import { withSwapiSerivce } from '../hoc-helper';

const PlanetDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="population" label="Population" />
            <Record field="rotationPeriod" label="Rotation period" />
            <Record field="diameter" label="Diameter" />
        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => { 
    return { 
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImage
    }
}

export default withSwapiSerivce(mapMethodsToProps)(PlanetDetails);
