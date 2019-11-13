import React from 'react';

export default class HelloToggle extends React.Component {
    state = {
        who: ''
    };

    handleClick = e => {
        this.setState({
            who: 'Hello ' + e.currentTarget.innerText
        });
    };
   
   render() {
        return (
            <div>
                <button onClick={this.handleClick}>World</button>    
                <button onClick={this.handleClick}>React</button>
                <button onClick={this.handleClick}>Friend</button>
                  <p>{this.state.who}</p>  
            </div>
        );
    }
}