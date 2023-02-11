import React, {Component} from 'react';

class Stateexample extends Component{
    constructor(){
        super()
        this.state = {
            message: 'This is State Example 2'
        }
    }

    changedmessage () {
        this.setState({
            message: 'Changed: This is State Example 2'
        })
    }

    render(){
        return(
            <div>
                <h2 className="text-info">{this.props.name}</h2>
                <h3>{this.state.message}</h3>
                <button onClick = {() => this.changedmessage()}>Change</button>
            </div>
        )
    }
}
export default Stateexample