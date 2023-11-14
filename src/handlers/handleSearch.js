import utils from "../utils/index.js";

import bot from "../bot.js";

import search from "../Search Engines/index.js";

async function handleSearch(ctx, next) {

    try {
        const searchEngine = ctx.message.text.split(" ")[0].replace(/\W/g, "");

        const textToSearch = ctx.message.text.split(" ").slice(1).join(" ");

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


        const sentMessage = await bot.api.sendMessage(ctx.chat.id, formattedTextToSend, {
            parse_mode: "HTML"
        });

        setTimeout(() => {
            ctx.api.deleteMessage(ctx.chat.id, sentMessage.message_id).catch(() => { });
        }, 10 * 60 * 1000);
    } catch (err) {
        next(err);
    }

}





export default handleSearch;