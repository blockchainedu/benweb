// 3rd party React components
import React from 'react';

// 3rd party npm modules
import _ from 'lodash'

// app components
import Base from './Base';
import NavigationBar from './NavigationBar';

export default class App extends Base {
    constructor(props) {
        super(props)
    }
   
    render() {
        
        return (
            <div className='App'>
                <NavigationBar/>
                {this.props.children}
            </div>
        );
    }
}

