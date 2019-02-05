import React from 'react'

class Bomb extends React.Component {

    state = {
        secondsLeft: this.props.initialCount
    }

    componentDidMount(){
        this.interval = setInterval(() => {
            this.setState({
            secondsLeft : this.state.secondsLeft - 1
            }
        )}, 1000);
    }


    render(){
        return (
        <div>
            {this.state.secondsLeft > 0 ? 
            `${this.state.secondsLeft} seconds left before I go boom!` :
             'Boom!'   
            }
        </div>
        )
    }
}

export default Bomb