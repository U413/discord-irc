# discord-irc

[![Build Status](https://travis-ci.org/U413/discord-irc.svg?branch=master)](https://travis-ci.org/U413/discord-irc)

> [Discord](https://discordapp.com/) and [IRC](https://www.ietf.org/rfc/rfc1459.txt) relay for U413. Forked from [reactiflux/discord-irc](https://github.com/reactiflux/discord-irc)

## Example

![discord-irc](http://i.imgur.com/oI6iCrf.gif)

## What's different?

This version supports end-to-end encryption, and is compatible with the [DiscordEncryption](https://github.com/EnKrypt/DiscordEncryption) plugin.

## Usage

This package is not on npm, so you will have to do some manual cloning and building

```bash
$ git clone git@github.com:U413/discord-irc
$ cd discord-irc
```

If using yarn:

```bash
$ yarn
$ yarn build && yarn start --config ./config.json
```

OR If using npm:

```bash
$ npm install
$ npm run build && npm start -- --config ./config.json
```

As indicated, you must set up a `config.json` file to be passed as an argument. \
To configure, follow the [same rules as the original project](https://github.com/reactiflux/discord-irc#configuration).

With this project however, it can take in an extra `encryption` parameter as an object mapping the discord channels to the secrets to be used for encryption and decryption. \
The first secret in the list will be used by default for encryption, and it will be your primary secret. \
The other secrets in the list (including the primary) will be used for decryption. The bot will try to decrypt with all secrets one by one until one works, or it will indicate that decryption has failed.

```js
[
    {
        "nickname": "test",
        "server": "irc.testbot.org",
        "discordToken": "botwantsin123",
        "channelMapping": {
            "#other-discord": "#new-irc-channel"
        },
        // ...Other discord-irc config parameters
        "encryption": {
            "other-discord": ["main-secret", "other-secret1", "other-secret2"]
        }
    }
]
```
