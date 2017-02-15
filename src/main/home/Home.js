import React from 'react'
import LeftNav from '../../sideNav/LeftNav'
import Counter from '../counter/Counter'

export default React.createClass({
  render: function(){
  var list = [];

  var data = [
    { text: "1" },
    { text: "2" },
    { text: "3"}
  ];

  for(var i in data){
    list.push(<li>{data[i].text}</li>)
  }

  return(
    <div>
    <LeftNav />
    <Counter />
    <p>以下に購入済みノート一覧が表示される</p>
      <ul>
        {list}
      </ul>
    </div>
  );
}
})
