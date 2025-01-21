require('dotenv').config();

module.exports = {
  port: process.env.FRONTEND_PORT || 5000,
  server: {
    baseDir: "public",
    routes: {
      "/src": "src"
    }
  }
};