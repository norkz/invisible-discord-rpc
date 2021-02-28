const RPC = require('discord-rpc');
const client = new RPC.Client({transport: "ipc"});

client.on('ready', () => {
    console.log('Ready')
})
client.on('connected', () => {
   client.setActivity({
       'buttons':[{label:'GitHub', url: 'https://github.com/norkz'}, {label:'Website', url:'https://norkz.github.io/'}]
  });
})

client.on('rate-limit', () => {
    return console.log('Rate Limit')
})
client.login({ 'clientId':'YOUR-APPLICATION-ID-HERE'});
