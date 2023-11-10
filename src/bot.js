import { Bot } from "grammy";
import * as dotenv from "dotenv";

import utils from "./utils/index.js";
import { catchError } from "./handlers/botErrorHandler.js";
import { text } from "stream/consumers";


dotenv.config();

const TOKEN = process.env.TOKEN;

const bot = new Bot(TOKEN);



bot.command("start", async (ctx) => {
  await ctx.reply(`<b>Hi ,Welcome to Google search bot</b>😊`, {
    parse_mode: "HTML",
  });

});

bot.command("google", async (ctx) => {

  const textToSearch = ctx.message.text.split(" ").slice(1).join(" ");
   
  console.log(textToSearch)
  if (!textToSearch) {
    await ctx.reply("Please enter a search term");
    return;
  }


  await ctx.reply(
    `<b>Results for search ${textToSearch}...</b>`,
    {
      parse_mode: "HTML",
    }
  );


  const results = await utils.googleSearch(textToSearch);

  console.log(results);

  const formattedTextToSend = utils.formatText(results);

  await ctx.reply(formattedTextToSend, {
    parse_mode: "HTML"
  });


});

bot.start();

bot.catch(catchError);
