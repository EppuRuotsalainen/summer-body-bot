import { Scenes } from 'telegraf'
import { escapeMarkdown } from '../../utils/format-list'

const POINTS_INFO_MESSAGE = `*How to Earn Points* 🌟

You can log your Kilometer-based and Hour-based training at any time with the command /addexercise, and all other activities once a week on Sundays using the command /weekscores. Here's how you can earn them:

1. *Kilometer-based Activities*:
   - Running/Walking: 1 point per km
   - Cycling: 0.25 points per km
   - Swimming: 4 points per km
   - Ice Skating: 0.25 points per km
   - Skiing: 0.5 points per km

2. *Hour-based Training*:
   - Low Intensity: 2 point per hour
   - Moderate Intensity: 4 points per hour
   - Vigorous Intensity: 8 points per hour

3. *Sports Sessions*: 5 points for participating in a sports session (for example, your guild's regular weekly session or a sports try-out / jogging session).

4. *New Sport*: 5 points for trying a new or long-unpracticed sport.

5. *New Healthy Recipe*: 5 points for trying out a new healthy recipe this week.

6. *Good Sleep*: 8 points for sleeping 7+ hours at least 5 nights in a week.

7. *Meditation*: 5 points for meditating at least 10 minutes on 5 days during the past week.

8. *Less Alcohol*: 10 points for consuming at most 5 portions of alcohol during the week.`

export const howToGetPoints = new Scenes.BaseScene<any>('how_to_get_points_scene')

howToGetPoints.enter(async (ctx: any) => {
  await ctx.replyWithMarkdownV2(escapeMarkdown(POINTS_INFO_MESSAGE))
  await ctx.scene.leave()
})