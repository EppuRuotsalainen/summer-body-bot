import { Scenes } from 'telegraf'
import { escapeMarkdown } from '../../utils/format-list'

const STATS_INFO_MESSAGE = `*Discover Your Stats and Rankings!* 🏆

Use these commands to track your and your team's progress:

/leaderboards - See top 15 teams in the competition

/team - Check your team members' contributions

/summary - Get your personal points summary

/topguilds - See guild standings in the competition

/topguildsall - Compare guild points in more detail

/topusers - See top 15 participants in the competition

Stay motivated and see how your efforts stack up against the competition!`

export const statsInfoScene = new Scenes.BaseScene<any>('stats_info_scene')

statsInfoScene.enter(async (ctx: any) => {
  await ctx.replyWithMarkdownV2(escapeMarkdown(STATS_INFO_MESSAGE))
  await ctx.scene.leave()
})