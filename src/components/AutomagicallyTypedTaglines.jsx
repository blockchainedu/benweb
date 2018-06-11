import React from 'react';
import Typist from 'react-typist';

import Base from './Base';

export default class AutomagicallyTypedTaglines extends Base {
    constructor(props) {
        super(props)
        this.autoBind('handleTypingRefresh', 'renderTypedTaglines')
        this.state = {
            hackedRepeater: true
        }
    }
    handleTypingRefresh() {
        console.log('handleTypingRefresh')
        this.setState({ hackedRepeater: false }, () => {
            setTimeout(() => this.setState({ hackedRepeater: true }), 100);
        });
    }
    renderTypedTaglines() {
        console.log('renderTypedTaglines')
    }
    render() {
        console.log(this.state.hackedRepeater)
        return (
            <div className='AutomagicallyTypedTaglines'>
                {this.state.hackedRepeater
                    ?
                        <Typist
                            startDelay={500}
                            avgTypingDelay={80}
                            onTypingDone={this.handleTypingRefresh}
                        >
                            {this.props.taglines[0]}
                            <Typist.Backspace count={this.props.taglines[0].length} delay={2000}/>
                            {this.props.taglines[1]}
                            <Typist.Backspace count={this.props.taglines[1].length} delay={2000}/>
                        </Typist>
                    :
                        ''
                }
                
                
                {/*<div className='type-cursor'/>*/}
            </div>
        );
    }
}

