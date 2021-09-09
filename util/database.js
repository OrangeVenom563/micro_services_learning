require('dotenv').config()
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = callback => {
  MongoClient.connect(process.env.MONGO_URI)
  .then(client=>{
    console.log('connected!');
    callback(client);
  })
  .catch(err => {
    console.log(err)
  })
}

module.exports = mongoConnect;