import axios from "axios";
import { config } from "dotenv";


config();

async function duckSearch(query) {
    try {
        const response = await axios.get(`https://api.duckduckgo.com/?q=${query}&format=json`);
        return response.data

    } catch (err) {
        console.error("Error while duck search...", err)
    }
}

(async () => {
    const result = await duckSearch(encodeURIComponent("who is bek shoyatbekov"));
    console.log(result);
    console.log(encodeURIComponent("who is bek shoyatbekov"))
})();


export default duckSearch;