const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose')
const colors = require('colors')

const connectDB = async function main(){
  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   */
  const uri = process.env.MONGO_URI;


  // const client = new MongoClient(uri);

  try {
      // Connect to the MongoDB cluster
      await mongoose.connect(uri);
      console.log(`Connected to  MongoDB Database ${mongoose.connection.host}`.bgMagenta.white)

  } catch (error) {
      console.log(error.bgRed.white);
  }
};

module.exports = connectDB;