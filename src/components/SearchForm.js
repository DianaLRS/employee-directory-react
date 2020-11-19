import React from "react";
import "./SearchForm.css";


function SearchForm(props){
  return(
    


<form className="form-group">
<input 
onChange={props.handleInputChange} 
value={props.search} 
className="form-control"
 type="text" 
 placeholder="Search Directory"
 id="search"/>
  <button onClick={props.handleInputChange} className="btn btn-primary mt-3"> Search</button>
</form>
  )

}
export default SearchForm;