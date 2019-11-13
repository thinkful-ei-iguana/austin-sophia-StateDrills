import React from 'react';

export default class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8,
    }

    state = {
        chamber: null,
        spinningTheChamber: false
    };

    handleClick = () => {
        this.setState({
            spinningTheChamber: true
        });

        this.timeout = setTimeout(() => {

            const randomNumber = Math.ceil(Math.random() * 8);

            this.setState({
                chamber: randomNumber,
                spinningTheChamber: false
            })
        }, 2 * 1000);
    };

    rouletteSpin() {
        const chamber = this.state.chamber;
        const spinningTheChamber = this.state.spinningTheChamber;
        const bulletInChamber = this.props
        if (spinningTheChamber === true) {
            return 'Spinning the chamber and pulling the trigger!';
        } else if (chamber === bulletInChamber) {
            return 'Bang!';
        } else {
            return 'You Are Safe!';
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Spin Trigger!</button>
                <p>{this.rouletteSpin()}</p>
            </div>
        );
    }
}