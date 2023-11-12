import axios from "axios";

import { config } from "dotenv";

config();

export const googleSearchResultParams = {
    kind: '',
    title: '',
    htmlTitle: '',
    link: '',
    displayLink: '',
    snippet: '',
    htmlSnippet: '',
    cacheId: '',
    formattedUrl: '',
    htmlFormattedUrl: '',
    pagemap: {}
}

/**
 * Performs a Google search using the provided query.
 *
 * @param {string} query - The search query to be used.
 * @return {googleSearchResultParams} The search results
 */
const googleSearch = async (query) => {
    try {
        const response = await axios.get(process.env.GOOGLE_ENDPOINT, {
            params: {
                key: process.env.GOOGLE_API_KEY,
                cx: process.env.SEARCH_ENGINE_ID,
                q: query
            }
        })

        return response.data.items;
    } catch (err) {
        console.error("Error while googling\n", err);
    }
}


export default googleSearch;