import React from 'react'
import LeftNav from '../../sideNav/LeftNav'
import Counter from '../counter/Counter'
import './Home'

export default React.createClass({
  render: function(){
  return(
    <div className="Home">
    <LeftNav />
    <Counter />
    </div>
  );
}
})
