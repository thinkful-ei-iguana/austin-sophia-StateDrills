import React from 'react';

export default class HelloToggle extends React.Component {
    state = {
        who: ''
    };

    handleClick = e => {
        this.setState({
            who: e.currentTarget.innerText
        });
    };
   
   render() {
        return (
            <div>
                <button onClick={this.handleClick}>Hello World</button>    
                <button onClick={this.handleClick}>Hello Friend</button>
                <button onClick={this.handleClick}>Hello React</button>
                  <p>{this.state.who} </p>  
            </div>
        );
    }
}