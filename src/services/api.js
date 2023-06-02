import axios from 'axios';
const API_URL = 'http://localhost:8000';

const API_GMAIL = async(urlObject,payload) =>
{
     return await axios({
        method: 'urlObject.method',
        // eslint-disable-next-line no-template-curly-in-string
        url: "${API_URL}/${urlObject.endpoint}",
        data:payload

})
}
export default API_GMAIL;
