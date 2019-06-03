import React from 'react';
import {withRouter} from 'react-router-dom';
import Row from '../row';
import ErrorBoundry from '../error-boundry';
import { PersonList, PersonDetails } from '../sw-components';

const PeoplePage = ({ history, match }) => {

    const { id } = match.params;

    const itemList = (
        <ErrorBoundry>
            <PersonList
                onItemSelected={(id) => history.push(id)}
            />
        </ErrorBoundry>
    );

    const personDetails = (
        <ErrorBoundry>
            <PersonDetails itemId={id} />
        </ErrorBoundry>
    );
    return (
        <Row left={itemList} right={personDetails} />
    );
}

export default withRouter(PeoplePage);