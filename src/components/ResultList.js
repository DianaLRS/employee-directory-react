import React from "react";
import "./ResultList.css"


function ResultList(props) {


  return (

  <table className="table table-striped">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope ="col">First Name</th>
        <th scope ="col">Last Name</th>
        <th scope ="col">Phone</th>
        <th scope ="col">Email</th>
        <th scope="col">DOB</th>
      </tr>
    </thead>
    <tbody>
      {props.results.map(result =>(
        <tr key={result.key}>
          <th scope ="row"><img src={result.picture.medium} alt={result.name.first} /></th>
          <td>{result.name.first}</td>
          <td>{result.name.last}</td>
          <td>{result.phone}</td>
          <td>{result.email}</td>
          <td>{result.dob.date}</td>
        </tr>
      ))}
    </tbody>
  </table>


  )
}


export default ResultList;
