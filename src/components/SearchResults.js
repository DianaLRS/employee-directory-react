import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";


    class SearchResults extends Component {
        state = {
          search: "",
          results: [],
          error:""
        };
    componentDidMount(){
            API.getEmployees("")
            .then(res => this.setState({
              results: res.data.results
            }))
            .catch(err => console.log(err))
        }
    handleInputChange = event => {
      console.log("testingn")
    
            this.setState({ search: event.target.value });
          
          };
    handleFormSubmit = event =>{
    event.preventDefault();
    this.getEmployees(this.search.state)

}
render() {
console.log(this.state.results);
    return (
      <div>

{/* <button onClick={this.handleInputChange}>Testig</button> */}
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList results={this.state.results} />
      </div>
    );
  }
}
export default SearchResults;