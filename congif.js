// config.js
const dotenv = require('dotenv');
const path = require('path');

// .env ফাইল লোড করা
dotenv.config({ path: path.join(__dirname, '.env') });

module.exports = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  
  // বট কনফিগারেশন
  bot: {
    name:.env.BOT_NAME king rahul || 'WA-Bot',
    adminNumber: process.env.ADMIN_NUMBER || '',
    prefix: '!', // কমান্ডের শুরুতে যা থাকবে (যেমন: !help, !status)
  },
  
  // সেশন ও স্টোরেজ সেটিংস
  session: {
    directory: './.wwebjs_auth', // WhatsApp কিউআর কোড স্ক্যান করার পর সেশন যেখানে সেভ হবে
    clientId: 'whatsapp-session'
  },
  
  // মেসেজ ও অন্যান্য লিমিট
  limits: {
    maxRetry: parseInt(process.env.MAX_RETRY, 10) || 3,
    cooldownTime: 2000 // প্রতি মেসেজের মাঝখানে ২ সেকেন্ড বিরতি (স্প্যামিং রোধ করতে)
  }
};
