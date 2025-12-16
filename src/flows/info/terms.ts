import { Scenes } from 'telegraf'
import { escapeMarkdown } from '../../utils/format-list'

const TERMS_AND_CONDITIONS = `Using SummerBodyBot, you agree to the following terms and conditions. This bot is designed to collect and record scores for participants in the competition among Aalto guilds, as well as within teams. Please note that the functionality of the bot may be modified or discontinued at any time without prior notice. The administrators and developers of SummerBodyBot are not liable for any adverse outcomes that may result from participation in the competition or use of the bot.

Participation in the competition and use of SummerBodyBot are provided free of charge for members of Aalto guilds. In order to track scores, the bot gathers certain user information, which will not be sold or disclosed to any third party. Users may request deletion of their personal data at any time.

Offensive team names or inappropriate behavior during the competition are strictly prohibited. Any team found engaging in such actions will be disqualified, and the associated user may be banned from further participation. All collected data will be deleted after the conclusion of the competition.

The most current version of these terms and conditions is available via the /terms command. These terms may be updated at any time without prior notice.`

const TERMS_MESSAGE = `*Terms and Conditions*

${TERMS_AND_CONDITIONS}`

export const termsScene = new Scenes.BaseScene<any>('terms_scene')

termsScene.enter(async (ctx: any) => {
  await ctx.replyWithMarkdownV2(escapeMarkdown(TERMS_MESSAGE))
  await ctx.scene.leave()
})