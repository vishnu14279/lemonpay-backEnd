const mongoose = require('mongoose');
const dotenv = require('dotenv');
const http = require('http');

// Load environment variables
dotenv.config({ path: './.env' });

// Handle uncaught exceptions
process.on('uncaughtException', err => {
  console.error('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.error(err.name, err.message);
  process.exit(1);
});

// App and server setup
const app = require('./app');
const server = http.createServer(app);

// Connect to MongoDB
const database = process.env.DATABASE;
if (!database) {
  console.error('❌ DATABASE connection string is missing in .env');
  process.exit(1);
}

mongoose.connect(database)
  .then(() => console.log('✅ DB connection successful!'))
  .catch(err => {
    console.error('❌ DB connection error:', err.message);
    process.exit(1);
  });

// Start server
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', err => {
  console.error('UNHANDLED REJECTION! 💥 Shutting down...');
  console.error(err.name, err.message);
  server.close(() => process.exit(1));
});
