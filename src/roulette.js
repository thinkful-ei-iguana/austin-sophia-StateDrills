import React from 'react';

export default class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8
    }

    state = {
        chamber: null,
        spinningTheChamber: false
    };

<<<<<<< HEAD
    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

=======
>>>>>>> 7fce6fc3f02d3f37af1e58497e216fda40f31355
    handleClick = () => {
        this.setState({
            spinningTheChamber: true,
        })

        this.timeout = setTimeout(() => {
<<<<<<< HEAD
            const randomChamber = Math.ceil(Math.random() * 8)
      
            this.setState({
              chamber: randomChamber,
              spinningTheChamber: false,
            })
          }, 2000)
        }

    rouletteSpin() {
        const { chamber, spinningTheChamber } = this.state
        const { bulletInChamber } = this.props
        if (spinningTheChamber) {
          return 'spinning the chamber and pulling the trigger! ...'
        } else if (chamber === bulletInChamber) {
          return 'BANG!!!!!'
=======

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
>>>>>>> 7fce6fc3f02d3f37af1e58497e216fda40f31355
        } else {
          return 'You Are Safe!'
        }
      }

<<<<<<< HEAD
      render() {
        return (
          <div className='RouletteGun'>
            <p>{this.rouletteSpin()}</p>
            <button onClick={this.handleClick}>
              Pull the trigger!
            </button>
          </div>
        )
      }
    }
=======
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
>>>>>>> 7fce6fc3f02d3f37af1e58497e216fda40f31355
