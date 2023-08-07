import dotenv from 'dotenv'
dotenv.config();

import express from 'express'
import { client } from './services/discord'

dotenv.config();
const app = express()
const port = process.env.PORT || 1234

app.get('/presence/:userId', async (req, res) => {
  const guildId = process.env.DISCORD_GUILD_ID || ''
  try {
    const guild = client.guilds.cache.get(guildId)
    const member = await guild?.members.fetch(req.params.userId)
    const presence = member?.presence

    res.json({ presence })
  } catch (error) {
    console.error(error)
    res.status(400).json({ "error": error })
  }
})

app.listen(port, () => {
  console.log('API ready on port', port)
})