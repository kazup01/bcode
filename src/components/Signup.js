import React from 'react'

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
      <div>
      <h3>Enter your account information</h3>
      <p>ID</p><input id="user-id" type="text" />
      <p>Name</p><input id="user-name" type="text" />
      <p>Email</p><input id="user-email" type="text" />
      <p>Password</p><input id="user-password" type="password" />
      <button id="user-submit" type="submit">Submit</button>
      <p id="output"></p>
      </div>
    )
  }
})
