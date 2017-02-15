import React from 'react'
import Form from 'muicss/lib/react/form'
import Button from 'muicss/lib/react/button'
import Input from 'muicss/lib/react/input'
import Textarea from 'muicss/lib/react/textarea'
import './LeftNav.css'

export default React.createClass({
  render(){
    return(
      <div className="leftNav">
        <h2>Serach stocks</h2>
        <div className="form">
        <Form>
        <Input hint="Input 1" />
        <Input hint="Input 2" />
        <Textarea hint="Textarea" />
        <Button variant="danger">Submit</Button>
        </Form>
        </div>
      </div>
    )
  }
})
