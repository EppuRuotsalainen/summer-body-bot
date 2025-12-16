import { Scenes } from 'telegraf'
import { escapeMarkdown } from '../../utils/format-list'

const PRIVATE_CHAT_HELP = `*Help and Commands Overview* 🛠️

/start - Get introduction & instructions to get basic information about the competition.

/register - Initiate your registration and set up your profile.

/createteam - Form a new team.

/jointeam - Join an existing team. You will need the team ID, provided to who created the team.

/addexercise - Log your Kilometer-based and Hour-based training.

/weekscores - Log your weekly achievements to earn points every Sunday.

/howtogetpoints - Discover the various ways to earn points.

/statsinfo - Show commands for getting rankings and stats.

/terms - Read current terms and conditions.

If there is something that you did not understand or something problematic comes up you can send me a message on Telegram @EppuRuotsalainen.`

const GROUP_CHAT_HELP = `*Help and Commands Overview* 🛠️

/leaderboards - View 30 teams with most points and their rankings.

/team - Check your team members' contributions.

/summary - Get your personal points summary.

/topguilds - See guild standings in the competition.

/topguildsall - Compare guild points in more detail.

/topusers - See top 15 users in the competition

Please interact with me in a private chat for full features and more detailed commands.`

export const helpScene = new Scenes.BaseScene<any>('help_scene')

helpScene.enter(async (ctx: any) => {
  const isPrivateChat = ctx.update.message.chat.type === 'private'
  const helpMessage = isPrivateChat ? PRIVATE_CHAT_HELP : GROUP_CHAT_HELP
  
  await ctx.replyWithMarkdownV2(escapeMarkdown(helpMessage))
  await ctx.scene.leave()
})