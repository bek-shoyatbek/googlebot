import escapeHTML from "./escapeHTML.js";
import { googleSearchResultParams } from "../Search Engines/googleSearch.js";

/**
 *
 *
 * @param {googleSearchResultParams} items
 */
const formatMessage = (items) => {
    let formattedText = "";
    for (let item of items) {
        let { title, link, snippet } = item;
        title = escapeHTML(title).split(" ").slice(0, 25).join(" ");
        snippet = escapeHTML(snippet).split(" ").slice(0, 60).join(" ");
        formattedText += `<b>${title}</b>\n<b>${escapeHTML(snippet)}</b> \n <b>link</b>: ${link}\n\n`
    }
    return formattedText;
}



export default formatMessage;
