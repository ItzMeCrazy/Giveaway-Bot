module.exports = async (client, thread) => {
  try {
    if (thread.joinable && !thread.joined) {
      await thread.join();
    }
  } catch (e) {
    console.log(String(e).grey)
  }
}

/**********************************************************
 * @INFO
 * Bot Coded by The Crazy#0070 | https://discord.gg/3D4PkVyrUt
 * @INFO
 * Please Mention Us The Ice, When Using This Code!
 * @INFO
 *********************************************************/