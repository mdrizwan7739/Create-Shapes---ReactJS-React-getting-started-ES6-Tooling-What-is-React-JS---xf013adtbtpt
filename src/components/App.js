import React from 'react'
import '../styles/App.css';
const handleClick = () => {
  let b = document.getElementById('select').value;
  let a = document.createElement('div');
  a.className = b;
  
  a.innerHTML = k;
  k = k + 1;
  document.getElementById('shapes-holder').appendChild(a);
}
const App = () => {
  return (

    <div id="main">
var k = 0;


      <div id="shape-creator">
        <select id='select' >
          <option value="square">square</option>
          <option value="circle">circle</option>
        </select>
        <button onClick={handleClick}>Add Shape</button>

      </div>
      <div id="shapes-holder">
      </div>
    </div>
  )
}


export default App;
