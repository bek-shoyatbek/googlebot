import utils from "../utils/index.js";

import bot from "../bot.js";

import search from "../Search Engines/index.js";

async function handleSearch(ctx) {

    const searchEngine = ctx.message.text.split(" ")[0].slice(1);

    const textToSearch = ctx.message.text.split(" ").slice(1).join(" ");

    console.log(searchEngine, textToSearch);

    if (!textToSearch) {
        await ctx.reply("Please enter a search term");
        return;
    }

    await bot.api.sendMessage(ctx.chat.id,
        `<b>Results for search ${textToSearch}...</b>`,
        {
            parse_mode: "HTML",
        }
    );


    let results;
    if (searchEngine == utils.engines.google) {
        results = await search.googleSearch(textToSearch);
    } else if (searchEngine == utils.engines.bing) {
        results = await search.bingSearch(textToSearch);
    }


    results = utils.makeSearchResultsSolid(results, searchEngine);

    const formattedTextToSend = utils.formatText(results);

    await bot.api.sendMessage(ctx.chat.id, formattedTextToSend, {
        parse_mode: "HTML"
    });

}





export default handleSearch;