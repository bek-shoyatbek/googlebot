import utils from "../utils/index.js";

import bot from "../bot.js";

async function handleUserRequest(ctx) {

    let textToSearch = ctx.message.text.split(" ").slice(1).join(" ");

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


    const results = await utils.googleSearch(textToSearch);

    const formattedTextToSend = utils.formatText(results);

    await bot.api.sendMessage(ctx.chat.id, formattedTextToSend, {
        parse_mode: "HTML"
    });
}





export default handleUserRequest;