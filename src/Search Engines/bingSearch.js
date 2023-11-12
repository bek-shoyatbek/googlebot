import { config } from "dotenv";
import axios from "axios";

config();

const googleSearchResultParams = {
    kind: 'customsearch#result',
    title: 'What Is JavaScript & What Is It Used For? A Basic Guide to JS',
    htmlTitle: '<b>What Is JavaScript</b> &amp; What Is It Used For? A Basic Guide to <b>JS</b>',
    link: 'https://www.semrush.com/blog/javascript/',
    displayLink: 'www.semrush.com',
    snippet: 'Mar 21, 2023 ... What Is JavaScript and Why Is It used? JavaScript is a computer programming language commonly used to add dynamism and interactivity to webpages ...',
    htmlSnippet: 'Mar 21, 2023 <b>...</b> <b>What Is JavaScript</b> and Why Is It used? <b>JavaScript</b> is a computer programming language commonly used to add dynamism and interactivity to webpages&nbsp;...',
    cacheId: 'wmwvg6REMpIJ',
    formattedUrl: 'https://www.semrush.com/blog/javascript/',
    htmlFormattedUrl: 'https://www.semrush.com/blog/javascript/',
    pagemap: { cse_thumbnail: [Array], metatags: [Array], cse_image: [Array] }
}

const bingSearchResultParams = {
    id: 'https://api.bing.microsoft.com/api/v7/#WebPages.2',
    name: 'Facts about cats: Domestication, breeds and behavior - Live Science',
    url: 'https://www.livescience.com/facts-about-cats',
    thumbnailUrl: 'https://www.bing.com/th?id=OIP.yH20LCLhBlaxMUi6OuHMngHaEK&w=80&h=80&c=1&pid=5.1',
    datePublished: '2022-09-06T00:00:00.0000000',
    datePublishedDisplayText: '6-sen, 2022',
    isFamilyFriendly: true,
    displayUrl: 'https://www.livescience.com/facts-about-cats',
    snippet: "Cats were domesticated around 10,000 years ago, research shows. A 2017 genetic study found that today's domestic cats descend from Felis silvestris lybica, a wild cat subspecies from the Near...",
    dateLastCrawled: '2023-11-10T19:38:00.0000000Z',
    primaryImageOfPage: [],
    cachedPageUrl: 'http://cc.bingj.com/cache.aspx?q=cats&d=4788618277753052&mkt=en-WW&setlang=uz-Latn-UZ&w=PQLN3z9B0W-BnLiFi-z5gIPtTwzVS6wM',
    language: 'en',
    isNavigational: false
};




/**
 * Performs a Bing search using the provided query.
 *
 * @param {string} query - The search query to be used.
 * @return {bingSearchResultParams} The search results
 */
const bingSearch = async (query, mkt = 'en-US') => {
    try {
        const response = await axios({
            method: 'get',
            url: process.env.BING_ENDPOINT,
            headers: {
                'Ocp-Apim-Subscription-Key': process.env.BING_API_KEY
            },
            params: {
                q: encodeURIComponent(query),
                mkt
            },
        });
        return response.data.webPages.value;
    } catch (error) {
        console.error('Error: ' + error.message);
        throw error;
    }
}

export default bingSearch;