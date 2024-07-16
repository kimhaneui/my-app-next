import { MongoClient } from 'mongodb'
const url = 'mongodb+srv://kimhaneui:mongohaneui@haneuicluster.dlo5d0w.mongodb.net/?retryWrites=true&w=majority&appName=HaneuiCluster'
const options = { useNewUrlParser: true }
let connectDB
console.log(process.env.NODE_ENV,'process.env.NODE_ENV');
if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url, options).connect()
}
export { connectDB }