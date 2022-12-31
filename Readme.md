
<center>

<!-- PROJECT -->
# API

<!-- Badges -->
![Node version](https://img.shields.io/badge/node-v18.9.0-brightgreen)
![NPM version](https://img.shields.io/badge/npm-v8.19.1-blue)
</center>

# Usage
The API('s) here work solely through GET requests. They do not require authentication. The only requirement is you are able to fetch links.<br />

The URI is requested in the following format:
`http://rhykerw.com/API/`

Available API('s) are;
- [welcome](#Welcome)

# Formatting

## Welcome

`http://rhykerw.com/API/welcome?background=&avatar=&username=&text=&color=`

#### Params

`background` => image link (attributed to the background of the card)
`avatar` => image link (attributed to the avatar/profile picture of the card)
`username` => string (attributed to the username text of the card)
`text` => string (attributed to the bottom text of the card)
`color` => string (attributed to the accenting colour of text/profile border)

Both `background` & `avatar` support PNG & JPG image extensions
`username` & `text` must be properly URI encoded for special characters
`color` must be a URI encoded HEX or any other standard color type (NOT DECIMAL) 