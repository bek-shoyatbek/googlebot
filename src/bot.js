import { Bot } from "grammy";
import * as dotenv from "dotenv";

import handlers from "./handlers/index.js";
import database from "./database/index.js";
import { hydrate } from "@grammyjs/hydrate";


dotenv.config();

const TOKEN = process.env.TOKEN;

const bot = new Bot(TOKEN);

bot.use(hydrate());


bot.command("start", async (ctx) => {
  await bot.api.sendMessage(ctx.chat.id, `<b>Hi ,Welcome to Q S O T - Quick Search on Telegram</b>😊`, {
    parse_mode: "HTML",
  });

  const user = await database.UserModel.findOne({ chatId: ctx.chat.id });
  if (!user) {
    let newUser = new database.UserModel.create({
      username: ctx.message.from.username,
      chatId: ctx.chat.id
    });
    const result = await newUser.save();

    console.log(result);

  }
});

bot.hears(/^google/, handlers.handleSearch);

bot.hears(/^bing/, handlers.handleSearch);

bot.command("google", handlers.handleSearch);

bot.command("bing", handlers.handleSearch)

bot.on("inline_query", handlers.handleInlineQuery);

bot.command("delete", handlers.handleDeleteMsg);

bot.start();

(async () => {
  await database.connectDb();
})();


bot.catch(handlers.handleBotError);


export default bot;
