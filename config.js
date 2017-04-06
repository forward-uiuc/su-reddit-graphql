require('dotenv').config();

var config = {};

config.instagram = {};
config.instagram.access_token_key = process.env.INSTAGRAM_ACCESS_TOKEN_KEY;
config.instagram.client_id = process.env.INSTAGRAM_CLIENT_ID;
config.instagram.client_secret = process.env.INSTAGRAM_CLIENT_SECRET;

module.exports = config;
