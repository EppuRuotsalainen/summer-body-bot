import { Scenes } from 'telegraf'
import { escapeMarkdown } from '../../utils/format-list'

const WELCOME_MESSAGE = `*Welcome to the Kesäkuntoon Competition!* 🎉

This competition, organised by Aava's Sport Committee, is designed to encourage a healthier lifestyle through friendly competition. As a participant, you'll earn points by engaging in various health and fitness activities, contributing both to your personal score and your team's overall performance.

_Every point counts!_`

const INSTRUCTIONS_MESSAGE = `*Getting Started:*

1. *Register*: Begin by registering with the command /register.

2. *Team Participation*: You may choose to team up with other fellow students, but participation as an individual is also welcome. If you decide to form or join a team, use the /createteam or /jointeam commands.

3. *Earning Points & Tracking Progress*: Use /howtogetpoints to learn how to get points. Amp up the excitement by checking rankings and stats — learn more with command /statsinfo.

4. *Assistance*: Need help? The /help command lists all available commands and their functions.`

export const startWizard = new Scenes.WizardScene(
  'start_wizard',
  async (ctx: any) => {
    await ctx.replyWithMarkdownV2(escapeMarkdown(WELCOME_MESSAGE))
    await ctx.replyWithMarkdownV2(escapeMarkdown(INSTRUCTIONS_MESSAGE))
    await ctx.scene.leave()
  }
)