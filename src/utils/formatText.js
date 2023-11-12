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
        const { title, link, snippet } = item;
        formattedText += `<b>${escapeHTML(title)}</b>\n<b>${escapeHTML(snippet).slice(0, 512)}</b> \n <b>link</b>: ${link}\n\n`
    }
    return formattedText;
}



export default formatMessage;
