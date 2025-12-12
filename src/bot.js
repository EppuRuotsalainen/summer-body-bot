const { Telegraf, Scenes, session } = require('telegraf')
const { telegramToken, commands, responses, maxUsage } = require('./config')
const flows = require('./flows')
const https = require('https')
const commandScenes = require('./config/commands')

const agent = new https.Agent({ keepAlive: false })
const bot = new Telegraf(telegramToken, { telegram: { agent } })

const onlyPrivate = require('./utils/check-private')
const texts = require('./utils/texts')

const stage = new Scenes.Stage(Object.values(flows))
bot.use(session())
bot.use(stage.middleware())

// Register all commands
commandScenes.forEach(({ command, scene, private: isPrivate }) => {
  if (isPrivate) {
    bot.command(command, onlyPrivate, (ctx) => ctx.scene.enter(scene))
  } else {
    bot.command(command, (ctx) => ctx.scene.enter(scene))
  }
})

const usedCommands = {}
commands.forEach(cmd => {
  usedCommands[cmd] = new Set()
})

commands.forEach(cmd => {
  bot.command(cmd, async (ctx) => {
    try {
      await ctx.deleteMessage()
    } catch (error) {
      console.error("Failed to delete message:", error)
    }
    const userId = ctx.from.id
    if (usedCommands[cmd].size >= maxUsage) {
      return 
    }
    if (usedCommands[cmd].has(userId)) {
      return
    }
    usedCommands[cmd].add(userId)
    return ctx.replyWithSticker(responses[cmd])
  })
})

bot.catch((err, ctx) => { 
  console.error(`Encountered an error for ${ctx.updateType}`, err) 
  ctx.reply(texts.actions.error.error)
})

module.exports = bot