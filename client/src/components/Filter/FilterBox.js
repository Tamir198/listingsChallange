import { useState } from 'react';
import '../Filter/FilterBox.css';

const FilterBox = (props) => {
  const [input, setInput] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      props.filterList(input);
      // 32 = space
    }else if(e.keyCode == 32){
      //Space pressed
    
    }


  }
  return (
    <div className="filterBox" action="">
      <input id="input"
        onInput={(e) => setInput(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
        type="text"
        name="filter"
        className="filter"
        placeholder="Enter your filter here">
      </input>

      <br></br>
    </div>
  )
}

export default FilterBox;