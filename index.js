const Discord = require("discord.js");
const { prefix, token, giphyToken } = require("./config.json");

const client = new Discord.Client();

let GphyApiClient = require("giphy-js-sdk-core");

giphy = GphyApiClient(giphyToken);

client.once("ready", () => {
  console.log("Ready..!");
});

client.on("message", (message) => {
    console.log(message.content);

  if (message.content.startsWith(`${prefix}hi`)) {

    let member = message.mentions.members.first();
    giphy.search("gifs", { q: "hi" }).then((response) => {
      let totalResponses = response.data.length;
      let responseIndex = Math.floor(Math.random() * 10 + 1) % totalResponses;
      var responseFinal=response.data[responseIndex];
      message.channel.send(":wave: Hey!  " + member.displayName,{
        files:[responseFinal.images.fixed_height.url]
    });
    
    });
    // })
  }
});
client.login(token);
