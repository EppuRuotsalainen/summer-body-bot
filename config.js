require('dotenv').config()

const allowedDates = process.env.ALLOWED_DATES ? process.env.ALLOWED_DATES.split(',') : []

module.exports = {
  telegramToken: process.env.TELEGRAM_TOKEN,
  mongodbUri: process.env.MONGODB_URI,
  startDate: process.env.COMPETITION_START_DATE,
  endDate: process.env.COMPETITION_END_DATE,
  duration: process.env.COMPETITION_DURATION,
  // reminderTime: process.env.REMINDER_TIME,
  reminderTime: '12:07',
  allowedDates,
}