const MainLayout = require('./layout/MainLayout');
const WelcomeMailContent = require('./mails/WelcomeMail');

const WelcomeMail = (username = '{{nickname}}') => ({
  id: 1,
  name: '001 | Registration Welcome',
  subject: 'Welcome to V-Poker!',
  text: ((username) =>
    `Hi ${username}!\n\nWelcome to V-Poker and thank you for registering to our service!\n\nPlay now: http://localhost \n\nEnjoy playing on our platform!\n\nThe V-Poker Team
    `)(username),
  html: ((username) =>
    `${MainLayout(
      'Welcome to V-Poker',
      username,
      WelcomeMailContent(),
    )}`)(username),
});

module.exports = {
  WelcomeMail,
};
