import '../Filter/FilterBox.css';


const FilterBox = (props) => {
  return (
      <div className="filterBox" action="">
      <input type="text" name="filter" className="filter" placeholder="Enter your filter here"></input>
      <br></br>
      </div>
  )
}

export default FilterBox;