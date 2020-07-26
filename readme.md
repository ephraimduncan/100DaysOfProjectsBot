# [100DaysOfProjects Twitter Bot](https://twitter.com/_100ProjectDays)

<strong>Helping developers who participate in
[#100DaysOfProjects](https://twitter.com/hashtag/100DaysOfProjects?src=hash)
to engage on Twitter.</strong>

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

<p>
  <a href="https://twitter.com/intent/follow?screen_name=_100DaysOfProjects">
  <img src="https://img.shields.io/twitter/follow/_100ProjectDays.svg?style=social" alt="follow on Twitter"></a>
</p>

![Logo](https://pbs.twimg.com/media/Ed424GzXkAEAJxW?format=png&name=900x900)

---

## Contributing

This bot manipulates tweets and streams by connecting to the
[Twitter API](https://developer.twitter.com/en/docs) via the `twit`
npm package. Please refer to the `twit`
[documentation](https://github.com/ttezel/twit) to make substantial
changes.

You can help by:

- Solving existing
  [issues](https://github.com/dephraiim/100DaysOfProjectsBot/issues?q=is%3Aopen+is%3Aissue)
- Adding more functionalities to the bot
  ([see issues](https://github.com/dephraiim/100DaysOfProjectsBot/issues?q=is%3Aopen+is%3Aissue+label%3Aenhancement))
- Pointing out bugs/errors

For any of the above, please create an issue so that it can be
addressed. New to GitHub issues? You can familiarize yourself with
them using GitHub's
[guide](https://help.github.com/articles/creating-a-pull-request/).

#### Setup

- You will need your _own_ Twitter account for testing, since the bot
  tweets from this account. Generate your Twitter API keys by
  [creating a new app](https://apps.twitter.com/app/new).
- Fork this repository.
- Create an `.env` file and add in your API keys and Twitter handle,
  like so:

```
TWITTER_CONSUMER_KEY=xxxxxxxxxxxxxxxxxxxxdMhxg
TWITTER_CONSUMER_SECRET=xxxxxxxxxxxxxxxxxxxxkFNNj1H107PFv1mvWwEM6CZH0fjymV
TWITTER_ACCESS_TOKEN=xxxxxxxxx-xxxxxxxxxxxxxxxxxxxxecKpi90bFhdsGG2N7iII
TWITTER_ACCESS_TOKEN_SECRET=xxxxxxxxxxxxxxxxxxxxZAU8wNKAPU8Qz2c0PhOo43cG
```

#### Make the Change

- Change any hashtags to
  [`#someTestHashtag`](https://twitter.com/search?q=someTestHashTag&src=typd)
  to avoid spamming the community hashtag.
- Run `npm/yarn test` to check all keys are available before you
  start. :+1:
- Make your suggested change.
- Ensure code style follows existing code (run `npm run format` to
  apply preferred formatting).
- Create a pull request.

---

### License

[MIT](./license)
