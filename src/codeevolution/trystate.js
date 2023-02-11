import React, {Component} from 'react';

class Trystate extends Component{
    constructor(){
        super()
        this.state = {
            message: 'State: This is first state'
        }
    }
   
    change(){
        this.setState ({
            message: 'State: This is second state'
        })
    }
   render(){
        return(
            <div>
                <p>{(this.props.name)} , {(this.props.age)}</p>

                <h1>{this.state.message}</h1>
                <button onClick = {() => this.change()}>Change</button>
            </div>
        )
    }
}
export default Trystate;