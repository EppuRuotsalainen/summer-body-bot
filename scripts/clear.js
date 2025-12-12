const mongoose = require('mongoose');
const User = require('../src/models/user-model');
const Team = require('../src/models/team-model');
require('dotenv').config();

async function clearDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/summerbody');
    console.log('Connected to MongoDB');

    // Delete all test data
    const usersDeleted = await User.deleteMany({});
    const teamsDeleted = await Team.deleteMany({});

    console.log(`✓ Deleted ${usersDeleted.deletedCount} users`);
    console.log(`✓ Deleted ${teamsDeleted.deletedCount} teams`);
    
    console.log('\nDatabase cleared successfully!');
    
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
    process.exit(0);
  } catch (error) {
    console.error('Error clearing database:', error);
    process.exit(1);
  }
}

clearDatabase();