import React, {useState} from "react";

function SearchBy(props){
    const [filter, setFilter] = useState('');

    const handleChange = (event) => {
        setFilter(event.target.value);
    };

    const handleClick = () => {
        var filterBy = ""
        switch(props.filterType) {
            case "Type Code":
                filterBy="get-by-type/"+filter;
              break;
            case "Category Id":
              filterBy="get-by-categoryId/"+filter;
              break;
            default:
              console.log("ERROR, filter type not found");
          }
        props.onFilter(filterBy)
      };

    return(
        <div className="mb-3">
            <label>Invoice {props.filterType}: </label>
            <input className="mx-2" type="number"
                    id="filter"
                    name="filter"
                    onChange={handleChange}
                    value={filter}></input>
            <button disabled={!filter} className="btn btn-info" onClick={handleClick}>Filter by {props.filterType}</button>
        </div>
    )
}

export default SearchBy;