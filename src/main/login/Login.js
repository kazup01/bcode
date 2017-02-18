import React from 'react'
import Form from 'muicss/lib/react/form'
import Button from 'muicss/lib/react/button'
import Input from 'muicss/lib/react/input'

export default React.createClass({
  render: function(){
    $(document).ready(function(){
      $('#user-submit').click(function(){
        var payload = {
          userId: $('#user-id').val(),
          email: $('#user-email').val(),
          password: $('#user-password').val()
        };

        $.ajax({
          url: "/login",
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
      <div>
      <p>email</p><Input id="user-email" type="text" />
      <p>password</p><Input id="user-password" type="password" />
      <Button id="user-submit" type="Submit">Submit</Button>
      <p id="output"></p>
      </div>
    )
  }
})
