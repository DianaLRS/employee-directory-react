import React from "react";
import "./SearchForm.css";


function SearchForm(props){
  return(
<div className="container">

<div className="row">
<div className="col-6-sm">

<input 
 type="text" 
 id="search"
 name="search"
 className="form-control"
 placeholder="Search Directory..."
onChange={props.handleInputChange} 
value={props.search} 
 />
 
 </div>
 <div className="col-sm-6">

 <button type="button" className="btn btn-link filteredNames">A-Z</button>
 <button onClick={props.handleFormSubmit} className="btn btn-dark search"> Search</button>
  </div>

</div>
</div>
  )

}
export default SearchForm;