import React, { Component } from 'react'
import {add, sub, multi} from './calc'

export class Test extends Component{
    render(){
        return(
            <div>
              <p>Sum of two number is {add(40,4)}</p>
              <p>Subtract of two number is {sub(40,4)}</p>
              <p>Multi of two number is {multi(40,4)}</p>
            </div>
        )
    }
}
export default Test