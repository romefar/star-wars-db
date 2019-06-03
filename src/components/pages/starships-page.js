import React from 'react';
import ErrorBoundry from '../error-boundry';
import { StarshipList } from '../sw-components';
import { withRouter } from 'react-router-dom';

const StarhipsPage = ({ history }) => {

    const itemList = (
        <ErrorBoundry>
            <StarshipList
                onItemSelected={(itemId) =>  history.push(itemId)}
            />
        </ErrorBoundry>
    );
    return (
         itemList 
    );
}

export default withRouter(StarhipsPage);