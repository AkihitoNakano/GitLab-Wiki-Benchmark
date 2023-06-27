import axios from "axios"
import { DB } from "./db/db"
import dotenv from 'dotenv'

dotenv.config()


const main = async () => {
  const db = new DB()
  
  await db.client.connect()

  try {
    const {rows}: {rows: Benchmark[]} = await db.client.query('SELECT * FROM benchmark;')
    // const rows = result.rows as Benchmark[]

    for (const row of rows) {
      console.log('1')
      await createWiki(row)
    }

  }catch(err) {

  } finally {
    await db.finish()
  }
}

export const createWiki = async(input: Benchmark) => {
  
  const data = {
    format: 'markdown',
    title: input.title,
    content: input.body
  }
  const url = `https://gitlab.example.com/api/v4/projects/47211526/wikis`

  const headers =  {'PRIVATE-TOKEN': `${process.env.GITLAB_TOKEN}`}

  try {
    const result = await axios.post(url, data, { headers })
    console.log(result)

  } catch(err) {
    throw err
  }
}

interface Benchmark {
  id: number
  title: string
  body: string
  created_at: Date
  updated_at: Date
}

main()
  .then()
  .catch(err => console.log(err))