import { Client } from "pg";

export class DB {
  client: Client

  constructor() {
    this.client = this.setClient()
  }

  private setClient() {
    return  new Client({
      host: 'localhost',
      port: 5432,
      database: 'benchmark',
      user: 'root',
      password: 'secret'
    })
  }

  async connect() {
    this.client.connect()
  }

  async finish() {
    this.client.end()
  }
}