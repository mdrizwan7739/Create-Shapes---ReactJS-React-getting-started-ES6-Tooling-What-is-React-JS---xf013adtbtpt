import React from 'react'
import '../styles/App.css';
const handleClick = () => {
  let b = document.getElementById('select').value;
  let a = document.createElement('div');
  a.className = b;
  
  a.innerHTML = -1;
  a.innerHTML =parseInt(a.innerHTML)+1;
  document.getElementById('shapes-holder').appendChild(a);
}
const App = () => {
  return (

    <div id="main">
  


      <div id="shape-creator">
        <select id='select' >
          <option value="Square">Square</option>
          <option value="Circle">Circle</option>
        </select>
        <button onClick={handleClick}>Add Shape</button>

      </div>
      <div id="shapes-holder">
      </div>
    </div>
  )
}


export default App;
