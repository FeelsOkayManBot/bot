const tmi = require('tmi.js');
const opts = {
options: {
    debug: true,
},
identity: {
    username: "fxhxyz", //
    password: "oauth:" // https://twitchapps.com/
},
channels: [ 
    '#fxhxyz',
    '#joskiyokda',
    '#showmasterokda'
    ]
};
const client = new tmi.client(opts);
client.connect();

// ?ping
client.on('message', (channel, tags, message, self) => {
    if(self) return;
    if(message.toLowerCase() === '?ping') {	
        try {
            if(tags.badges.broadcaster==1){
                client.say(channel, `/me @${tags.username}, pong `);
            }
        
            if(tags.badges.moderator==1){
                client.say(channel, `/me @${tags.username}, pong `)
            }
        }
        catch(err){
        client.say(channel, ``);
        }
    }
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ?mt ?mb
client.on('message', (channel, tags, message, self) => {
	if(self || !message.startsWith('?')) return;
	const args = message.slice(1).split(' ');
	const command = args.shift().toLowerCase();
	if(command === 'mb' && (channel === "#joskiyokda")) {
        try {
            if(tags.badges.broadcaster==1){
                client.on('message', checkChat2);
                function checkChat2(channel, username, message) {
                    let shouldSendMessage = false;
                        message = message.toLowerCase();
                    shouldSendMessage = args.some(blockedWord => message.includes(blockedWord.toLowerCase()));
                    if (shouldSendMessage) {
                    client.ban(channel, username.username)
                        .then((data) => {
                
                        }).catch((err) => {
                
                        });
                        client.say(channel, ``);
                    }
                }
            }
            if(tags.badges.moderator==1){
                client.on('message', checkChat2);
                function checkChat2(channel, username, message) {
                    let shouldSendMessage = false;
                        message = message.toLowerCase();
                    shouldSendMessage = args.some(blockedWord => message.includes(blockedWord.toLowerCase()));
                    if (shouldSendMessage) {
                    client.ban(channel, username.username)
                        .then((data) => {
                
                        }).catch((err) => {
                
                        });
                        client.say(channel, ``);
                    }
                }
            }
	    }
        catch(err){
            client.say(channel, ``);
        }
    } 
});

client.on('message', (channel, tags, message, self) => {
	if(self || !message.startsWith('?')) return;
	const args = message.slice(1).split(' ');
	const command = args.shift().toLowerCase();
	if(command === 'mt' && (channel === "#joskiyokda")) {
        try {
            if(tags.badges.broadcaster==1){
                client.on('message', checkChat3);
                function checkChat3(channel, username, message) {
                    let shouldSendMessage = false;
                        message = message.toLowerCase();
                    shouldSendMessage = args.some(blockedWord => message.includes(blockedWord.toLowerCase()));
                    if (shouldSendMessage) {
                    client.timeout(channel, username.username, 500)
                        .then((data) => {
                
                        }).catch((err) => {
                
                        });
                        client.say(channel, ``);
                    }
                }
            }
            if(tags.badges.moderator==1){
                client.on('message', checkChat3);
                function checkChat3(channel, username, message) {
                    let shouldSendMessage = false;
                        message = message.toLowerCase();
                    shouldSendMessage = args.some(blockedWord => message.includes(blockedWord.toLowerCase()));
                    if (shouldSendMessage) {
                    client.timeout(channel, username.username, 500)
                        .then((data) => {
                
                        }).catch((err) => {
                
                        });
                        client.say(channel, ``);
                    }
                }
            }
	    }
        catch(err){
            client.say(channel, ``);
        }
    } 
});
