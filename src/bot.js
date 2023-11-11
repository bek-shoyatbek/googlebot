import { Bot } from "grammy";
import * as dotenv from "dotenv";

import handlers from "./handlers/index.js";

dotenv.config();

const TOKEN = process.env.TOKEN;

const bot = new Bot(TOKEN);


bot.command("start", async (ctx) => {
  await bot.api.sendMessage(ctx.chat.id, `<b>Hi ,Welcome to G S O T - Google Search on Telegram</b>😊`, {
    parse_mode: "HTML",
  });

});


bot.hears(/^google/i, handlers.handleUserRequest)

bot.command("google", handlers.handleUserRequest);

bot.on("inline_query", handlers.handleInlineQuery);

bot.start();

bot.catch(handlers.handleBotError);


export default bot;
