# Invisible Discord RPC with Buttons! <img src="https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/discord-512.png" width="30">

## 🚀 Technologies <a href="https://www.nodejs.org/en/"> <img src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" width="20"> </a> *Node.js* <a href="https://www.javascript.com/"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" width="20"> </a> *JavaScript*

## 🔧 Setting up
```sh
- Extract the files into a folder
- Go into this folder
- Open terminal
```
(if you dont have yarn, sudo apt install yarn <img src="https://upload.wikimedia.org/wikipedia/commons/9/94/Ubuntu_logoib.svg" width="13"> sudo pacman -S yarn <img src="https://cdn0.iconfinder.com/data/icons/flat-round-system/512/archlinux-512.png" width="13">) 
```
yarn add discord-rpc
npm install discord-rpc
npm init -y
npm i
```

## ⚙️ Running
```sh
node index.js
```

## How to change the application name?
- Go into https://discord.com/developers/applications/
- Add a new application
- Download nothing.png
- Set nothing.png as your application image
- Put your application id on clientId at index.js

## 🤔 How can i change buttons?
If you want join match button with the invite to play feature,
- Remove buttons from index.js
- Add: `'partyMax':1,'partySize':0,'joinSecret':'random','matchSecret':'random'` into your setActivity.

*Is possible use custom buttons with party buttons?*

= No.

*How many buttons i can add?*

= Maximum 2.

*How my profile will looks like?*
= 

[![Profile](https://i.imgur.com/AK1z37c.png)](https://github.com/norkz)
