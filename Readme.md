
<div align="center">

<!-- PROJECT -->
# API

<!-- Badges -->
![Node version](https://img.shields.io/badge/node-v18.9.0-brightgreen)
![NPM version](https://img.shields.io/badge/npm-v8.19.1-blue)
</div>

## NOTICE
Once my own webpage is completed this project will be moved there. The system will remain the same and any requests through the same method.

# Usage
The API('s) here work solely through GET requests. They do not require authentication. The only requirement is you are able to fetch links.<br />

#### Note
This project is solely built in mind for use with the [YAGPDB](https://github.com/botlabs-gg/yagpdb) Discord bot. There is no guarantee it will work with any other project.<br />
And there is no guarantee on uptime.

## URI
The API('s) are requested in the following format: `http://rhykerw.com/API/`

Available API('s) are;
- [welcome](#Welcome)

# Formatting

## Welcome

`http://rhykerw.com/API/welcome?background=&avatar=&username=&text=&color=`

#### Params

`background` => image link (attributed to the background of the card)<br />
`avatar` => image link (attributed to the avatar/profile picture of the card)<br />
`username` => string (attributed to the username text of the card)<br />
`text` => string (attributed to the bottom text of the card)<br />
`color` => string (attributed to the accenting colour of text/profile border)

Both `background` & `avatar` support PNG & JPG image extensions<br />
Both `username` & `text` must be properly URI encoded for special characters<br />
And `color` must be a URI encoded HEX or any other standard color type (NOT DECIMAL)