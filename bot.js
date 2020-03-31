const Discord = require('discord.js');
const fs = require('fs');
const { resolve } = require('path');
require('dotenv/config')

const deleteMsg = require('./util/delete');
const saveFile = require('./util/saveFile');

const client = new Discord.Client();

const php = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('PHP NÃO É LINGUAGEM')
    .setDescription('Não é msm')
    .addFields([{name: 'tipo, n msm', value: 'namoral, sai dessa'}])
    .setImage('https://i.redd.it/oul3gz1bvwwy.jpg')
    .setTimestamp()


const js = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('JS É BOM')
    .setDescription('tipo pra caralho')
    .addFields([{name: 'bem melhor que o resto', value: 'faz tudo'}])
    .setImage('https://www.mememaker.net/api/bucket?path=static/img/memes/full/2019/Jan/8/3/pennywise-nodejs-212.png')
    .setTimestamp()

const vdd = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Verdade universal')
    .setDescription('!false')
    .addFields([{name: 'this !== 0', value: '!(!true)'}])
    .setImage('https://i.redd.it/gnv6kk3agzo41.jpg')
    .setTimestamp()


client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', async message => {

    const [init, ...rest] = message.content.split(' ');
    const command = init.toLocaleLowerCase();
    const attr = rest.join(' ');

    if (command === 'enviar') {
        const file = message.attachments.first();
        try {
          saveFile(file.url, resolve(__dirname, 'files', file.name));
          message.channel
            .send(`${file.name} salvo com sucesso`)
            .then(() => message.delete({ timeout: 10000 }));
        } catch (err) {
          console.log(err);
          message.channel
            .send('Ocorreu um erro, tente novamente')
            .then(() => message.delete({ timeout: 10000 }));
        }
      }

      if (command === 'buscar') {
        try {
          const buff = fs.readFileSync(resolve(__dirname, 'files', attr));
          const file = new Discord.MessageAttachment(buff, attr);
          message.channel.send(file).then(() => message.delete({ timeout: 150000 }));
        } catch (err) {
            message.channel
            .send(`arquivo ${attr} não encontrado!`)
            .then(() => message.delete({ timeout: 10000 }));
        }
      }
    
    
    if(command === 'delete' ) {
        deleteMsg(message.channel, Number(attr) + 1);
    }
    if(command === 's2') {
        message.channel.send('ATAPO')
    }

    if(message.content.includes('php') || message.content.includes('PHP')|| message.content.includes('pêagapê')|| message.content.includes('PHFODASE')) {
        
            message.react('💩')
            message.react('🖕')
            message.react('❌')
        
        message.channel.send(php);
    }
    if(message.content.includes('js') || message.content.includes('JS')|| message.content.includes('linguagem boa')) {
        message.channel.send(js);
    }

    if (command === 'true') {
    message.channel.send(vdd);
  }
    if (command === 'ping') {
    message.channel.send('pong');
  }
});

client.login(process.env.BOT_KEY);