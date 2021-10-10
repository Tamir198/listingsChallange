import '../Filter/FilterBox.css';


const FilterBox = (props) => {
  const filterValue = [];
  return (
    <div className="filterBox" action="">
      <input
        onInput={(e) => props.filterList(e.target.value)}
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