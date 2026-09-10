import { MongoClient, type Db } from 'mongodb'

const uri = process.env.MONGODB_URI
const dbName = process.env.MONGODB_DB ?? 'yatra_ai'

let clientPromise: Promise<MongoClient> | null = null

export function getDatabase(): Promise<Db> {
  if (!uri) throw new Error('MONGODB_URI is not configured')
  if (!clientPromise) clientPromise = new MongoClient(uri).connect()
  return clientPromise.then((client) => client.db(dbName))
}
