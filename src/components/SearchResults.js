import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";
import Wrapper from "./Wrapper/Wrapper";


    class SearchResults extends Component {
        state = {
          search: "",
          results: [],
          filteredNames:[],
          error:""
        };
    componentDidMount(){
            API.getEmployees("")
            .then(res => this.setState({
              results: res.data.results,
           
            
            }))
         
            .catch(err => console.log(err))
        }

      
    handleInputChange = event => {
      console.log("testing")
    const name = event.target.name;
    const value = event.target.value
            this.setState({ 
              search: event.target.value
             });
          
          };
    handleFormSubmit = event =>{
    event.preventDefault();
    this.getEmployees(this.search.state)

}
render() {
console.log(this.state.results);
    return (
      <div>
<Wrapper style ={{minHeight:"80%"}}>
{/* <button onClick={props.handleFormSubmit} className="btn btn-dark search"> Search</button> */}
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList results={this.state.results} />
        </Wrapper>
      </div>
    );
  }
}
export default SearchResults;