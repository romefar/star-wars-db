import React, { Component } from 'react';
import ErrorPanel from '../error-panel';

import './error-boundry.css';

export default class ErrorBoundry extends Component {

    state = { 
        hasError: false
    }

    componentDidCatch() { 
        this.setState({hasError : true});
    }

    render() { 
        if(this.state.hasError) { 
            return <ErrorPanel />
        }
        return this.props.children;
    }

}