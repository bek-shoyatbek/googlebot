import escapeHTML from "./escapeHTML.js";
import { googleSearchResultParams } from "./googleSearch.js";

/**
 *
 *
 * @param {googleSearchResultParams} items
 */
const formatMessage = (items) => {
    let formattedText = "";
    for (let item of items) {
        const { title, link, snippet } = item;
        console.log(link)
        formattedText += `<b>${escapeHTML(title)}</b>\n<strong>${escapeHTML(snippet)}</strong> \n <b>link</b>: ${link}\n\n`
    }
    return formattedText;
}



export default formatMessage;
