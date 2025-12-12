module.exports = [
  // Public commands (work in groups and DMs)
  { command: 'help', scene: 'help_scene', private: false },
  { command: 'leaderboards', scene: 'team_rankings_scene', private: false },
  { command: 'team', scene: 'team_member_rankings_scene', private: false },
  { command: 'summary', scene: 'user_summary_scene', private: false },
  { command: 'topguilds', scene: 'guild_standings_scene', private: false },
  { command: 'topguilds50', scene: 'guild_top_standings_scene', private: false },
  { command: 'topguildsall', scene: 'guild_comparison_scene', private: false },
  { command: 'topusers', scene: 'top_users_scene', private: false },
  
  // Private-only commands (DMs only)
  { command: 'start', scene: 'start_wizard', private: true },
  { command: 'howtogetpoints', scene: 'how_to_get_points_scene', private: true },
  { command: 'statsinfo', scene: 'stats_info_scene', private: true },
  { command: 'terms', scene: 'terms_scene', private: true },
  { command: 'rmuser', scene: 'delete_user_wizard', private: true },
  { command: 'register', scene: 'register_wizard', private: true },
  { command: 'createteam', scene: 'create_team_wizard', private: true },
  { command: 'jointeam', scene: 'join_team_wizard', private: true },
  { command: 'weekscores', scene: 'week_scores_wizard', private: true },
  { command: 'addexercise', scene: 'sports_activity_wizard', private: true },
  { command: 'adjustpoints', scene: 'adjust_points_wizard', private: true },
  { command: 'feedback', scene: 'feedback_wizard', private: true },
]