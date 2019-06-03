import React from 'react';
import ItemList from '../item-list';
import { withData, withSwapiSerivce, withChildFunction, compose } from '../hoc-helper';

const renderName = ({name}) => <span>{name}</span>;

const mapPersonMethodsToProps = (swapiService) => { 
    return { 
        getData: swapiService.getAllPeople
    }
}

const mapPlanetMethodsToProps = (swapiService) => { 
    return { 
        getData: swapiService.getAllPlanets
    }
}

const mapStarshipsMethodsToProps = (swapiService) => { 
    return { 
        getData: swapiService.getAllStarships
    }
}

// first argument - config function (or any si,ilar function) 
// second argument - component
// before refactor: withSwapiSerivce(mapStarshipsMethodsToProps)(withData(ListWithChildren));
// afterL: below
const PersonList = compose(
    withSwapiSerivce(mapPersonMethodsToProps),
    withData,
    withChildFunction(renderName)
)(ItemList);

const StarshipList = compose(
    withSwapiSerivce(mapStarshipsMethodsToProps),
    withData,
    withChildFunction(renderName)
)(ItemList);

const PlanetList = compose(
    withSwapiSerivce(mapPlanetMethodsToProps),
    withData,
    withChildFunction(renderName)
)(ItemList);


export {
    PersonList,
    PlanetList,
    StarshipList
};