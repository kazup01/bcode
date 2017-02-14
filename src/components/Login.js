import React from 'react'

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
      <p>email</p><input id="user-email" type="text" />
      <p>password</p><input id="user-password" type="password" />
      <button id="user-submit" type="Submit">Submit</button>
      <p id="output"></p>
      </div>
    )
  }
})
