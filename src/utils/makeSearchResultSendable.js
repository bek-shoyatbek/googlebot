// I couldn't name in a proper way :smile

import engines from "./engines.js";

/**
 * Generates a solid search result based on the given result and engine.
 *
 * @param {object} result - The search result object.
 * @param {string} engine - The search engine used.
 * @return {object} The solid search result object.
 */

function makeSearchResultsSolid(results, engine) {
    let answers = [];
    for (let result of results) {
        let answer = {};
        if (engine == engines.google) {
            answer = {
                title: result.title,
                snippet: result.snippet,
                link: result.link
            };
        } else if (engine == engines.bing) {
            answer = {
                title: result.name,
                snippet: result.snippet,
                link: result.url
            }
        } else {
            throw new Error("Error while making Search result solid: Error: engine not found ");
        }
        answers.push(answer);
    }
    return answers;
}






export default makeSearchResultsSolid;