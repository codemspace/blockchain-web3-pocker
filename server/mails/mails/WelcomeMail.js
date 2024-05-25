const Button = require('../components/Button');
const ContentBlock = require('../components/ContentBlock');
const Text = require('../components/Text');

const WelcomeMailContent = () => `
${ContentBlock(
  `${Text(
    'Welcome to V-Poker and thank you for registering to our service!',
  )}`,
)}
${Button('Play now!', 'http://localhost')}
${ContentBlock(`${Text('Enjoy playing on our platform!')}`)}
`;

module.exports = WelcomeMailContent;
