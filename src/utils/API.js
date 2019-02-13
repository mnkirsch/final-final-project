import axios from 'axios';

const BASEURL = "https://sandbox-api.brewerydb.com/v2/";
const APIKEY = "?key=a21c7e39286e1155223a13c41f053741";

export default {
    search: function(query) {
        return axios.get(BASEURL + query + APIKEY);
    }
};