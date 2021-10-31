import { BASE_API_URL } from "./Common";

const axios = require('axios');

const DataService = {
    Init: function () {
        // Any application initialization logic comes here
    },
    Text2Image: async function (obj) {
        console.log('obj in dataservice', obj)
        return await axios.post(BASE_API_URL + "/text2image", obj);
    },
}

export default DataService;