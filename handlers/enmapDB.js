const Enmap = require("enmap");

module.exports = async (client) => {
  client.giveaways = new Enmap({
    name: "giveaways",
    dataDir: "./databases/giveaways"
  });
  client.logger(`EnmapDB Loaded`.brightGreen);
}

/**********************************************************
 * @INFO
 * Bot Coded by The Crazy#0070 | https://discord.gg/3D4PkVyrUt
 * @INFO
 * Please Mention Us The Ice, When Using This Code!
 * @INFO
 *********************************************************/