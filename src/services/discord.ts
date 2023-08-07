import { Client, GatewayIntentBits } from 'discord.js'

const token = process.env.DISCORD_TOKEN || ''

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildMembers]
});

client.on('ready', () => {
  console.log(`Bot listo ${client.user?.tag}`)
});

client.login(token)

export { client }