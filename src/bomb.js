import React from 'react';

export default class Bomb extends React.Component {
    state ={
        count: 0
    };

    componentDidMount() {
        this.interval = setInterval(
          () => this.setState({
              count: this.state.count + 1
          }),
          1000);
      }

      componentWillUnmount (){
        clearInterval(this.interval);
    }


    displayBombText () {
    let count = this.state.count;
    if (count >= 8) {
        return 'BOOM!!';
    } else if (count % 2 != 0) {
        return 'tock';
    } else if (count % 2 === 0) {
        return 'tick';
    }
    
}

    render () {
        console.log('in Render', this.state.number);
        return(
            <div>
                <p>{this.displayBombText()}</p>
            </div>
        );
    }

 
    


}


// Object.assign( previousState, 
//     {quantity: state.quantity + 1}, 
//     {quantity: state.quantity + 1}, ... )