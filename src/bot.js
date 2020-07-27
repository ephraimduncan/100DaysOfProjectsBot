// Implementation of #100DaysOfProject Bot

console.log('==== #100DaysOfProject Bot Starting... ====');

// Import dependencies
const Twit = require('twit');
// Configuration
const config = require('./config');
const TwitterBot = new Twit(config);

// API

const retweet = () => {
  const params = {
    q: '#100DaysOfProjects',
    result_type: 'recent',
    count: 10,
    lang: 'en',
  };
  TwitterBot.get('search/tweets', params, (err, data) => {
    // when no errors
    if (!err) {
      let retweetID = data.statuses[0].id_str;

      TwitterBot.post('statuses/retweet/:id', { id: retweetID }, (err, res) => {
        if (res) {
          console.log(`====> RETWEET SUCCESS ${retweetID}`);
        }
        if (err) {
          console.log(`====> ERROR in RETWEET ${err}`);
        }
      });
    } else {
      console.log(`====> ERROR ${err}`);
    }
  });
};

// Invoke API
retweet();
