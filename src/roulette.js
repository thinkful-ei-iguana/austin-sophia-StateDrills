import React from 'react';

export default class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8, 
    }
    state ={
        chamber: null,
        spinningTheChamber: false
    };

    handleClick = e => {
        this.setState({
            spinningTheChamber: !this.spinningTheChamber
        });
    };

    rouletteSpin () {
        // let count = this.state.count;
        if (this.spinningTheChamber === true) {
            return 'Spinning the chamber and pulling the trigger!';
        } else if (this.chamber === this.bulletInChamber) {
            return 'Bang!';
        } else {
            return 'You Are Safe!';
        }
    }

    
   
    componentWillUnmount () {
        setTimeout =(function () {
            Math.ceil(Math.random() * 8);
        }, 2*1000);
         clearTimeout(setTimeout);
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Spin Trigger!</button>
        {this.state.spinningTheChamber && <p>{this.rouletteSpin()}</p>}
            </div>
        );
    }
}