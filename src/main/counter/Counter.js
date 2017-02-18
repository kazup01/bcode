import React, {Component} from 'react'
import Button from 'muicss/lib/react/button'
import './Counter.css'

export default class Counter extends Component {

  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div className="Counter">
        <p>Count: {this.state.count}</p>
        <Button variant="flat" onClick={e => this.increment()}>Increment</Button>
      </div>
    )
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }
}
