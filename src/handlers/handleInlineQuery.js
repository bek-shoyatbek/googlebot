import { InlineQueryResultBuilder } from "grammy";

async function handleInlineQuery(ctx, next) {
    try {
        const query = ctx.inlineQuery;
        if (!query || !query.id) return await next();
        const result = InlineQueryResultBuilder
            .article("id:grammy-website", "grammY", {
                reply_markup: new InlineKeyboard()
                    .url("grammY website", "https://grammy.dev/"),
            })
            .text(
                `<b>grammY</b> is the best way to create your own Telegram bots.
They even have a pretty website! 👇`,
                { parse_mode: "HTML" },
            );

        // Answer the inline query.
        await ctx.answerInlineQuery(
            [result], // answer with result list
            { cache_time: 30 * 24 * 3600 }, // 30 days in seconds
        );


    } catch (err) {
        next(err);
    }
}


export default handleInlineQuery;