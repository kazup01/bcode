import React from 'react'
import Form from 'muicss/lib/react/form'
import Button from 'muicss/lib/react/button'
import Input from 'muicss/lib/react/input'
import './Signup.css'

export default React.createClass({
    render: function(){
      $(document).ready(function(){
        $('#user-submit').click(function(){
          var payload = {
            userId: $('#user-id').val(),
            name: $('#user-name').val(),
            email: $('#user-email').val(),
            password: $('#user-password').val(),
          };

          $.ajax({
            url: "/users",
            type: "POST",
            contentType: "application/json",
            processData: false,
            data: JSON.stringify(payload),
            complete: function(data){
              $('#output').html(data.responseText);
            }
          });
        });
      });
    return(
      <div className="Signup">
      <h3>Enter your account information</h3>
      <p>ID</p><Input id="user-id" type="text" className="Input" />
      <p>Name</p><Input id="user-name" type="text" className="Input" />
      <p>Email</p><Input id="user-email" type="text" className="Input" />
      <p>Password</p><Input id="user-password" type="password" className="Input" />
      <Button id="user-submit" type="submit">Submit</Button>
      <p id="output"></p>
      </div>
    )
  }
})
