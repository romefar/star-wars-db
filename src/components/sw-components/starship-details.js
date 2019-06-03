import React from 'react';
import Record from '../record';
import ItemDetails from '../item-details';
import { withSwapiSerivce } from '../hoc-helper';

const StarshipDetails = (props) => {
    return (
        <ItemDetails {...props} >
            <Record field="model" label="Model" />
            <Record field="length" label="Length" />
            <Record field="costImCredits" label="Cost" />
        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipImage
    }
}

export default withSwapiSerivce(mapMethodsToProps)(StarshipDetails);