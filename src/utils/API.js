import axios from "axios";


const BASEURL="https://randomuser.me/api/?results=200";


    
  export default {
Search: function (query){
    return axios.get(BASEURL + query)
}
  }