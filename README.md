# Coding challenge

This repo contains a coding challenge. It showcases my workflow and skills at this point in developing React applications.

## Usage

First build the application

    npm run build

Followed by starting the server

    npm start

## Progress tracking

To track the progress of the challenge. A new commit will be made at least every 10 minutes. These commits do not include a scoped feature. Instead it has everything written up to that moment. I might make scoped commits when I think specific chunks should be isolated from the timer. Given that I can build the chunk under 10 minutes.

To automatically create the timed commits (kill with ctrl+c):

```
node committer.js
```

## Challenge

Build a chat application to be ran in the browser. Two (2) users must be able to send messages from different locations.

### Requirements

 - Can only use HTML, CSS, JS, React, Node, Node Libs (which are not a chat lib)
 - There must be a clear difference between messages from other and self
 - The following slash commands must be able to be issued
   - `/nick <name>` - sets your name for the chat
   - `/think <message>` - makes the text appear in dark grey, instead of black
   - `/oops` - removes the last message sent
 - Others nick should be shown on top (if set)

### Wish list
 - When the user is typing, indication that they are typing should be shown to the other user
 - Emoji support using the `:<emojiname>:` syntax
 - Animations. E.g. When a new message arrives, it should slide in, and the messages above slide up

## Disclaimer
As I've been looking for a project to use TailwindCSS on. This seemed like an oportune moment. And although it will help to quickly create a nice layout. It won't be as themeable as other setups.
