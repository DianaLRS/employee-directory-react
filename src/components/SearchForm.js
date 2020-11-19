import React from "react";
import "./SearchForm.css";


function SearchForm(props){
 
  return(

<form>
<input onChange={props.handleInputChange} value={props.search} classname="form-control" type="text" placeholder="Search Directory"id="search"/>
</form>

);
 
  }




export default SearchForm;