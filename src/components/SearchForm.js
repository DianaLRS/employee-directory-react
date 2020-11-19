import React from "react";
import "./SearchForm.css";


function SearchForm(props){
  return(
    


<form className="form-group">
<input 
 type="text" 
 id="search"
 name="search"
 className="form-control"
 placeholder="Search Directory..."
onChange={props.handleInputChange} 
value={props.search} 
 />

  {/* <button onClick={props.handleInputChange} className="btn btn-primary mt-3"> Search</button> */}
</form>
  )

}
export default SearchForm;