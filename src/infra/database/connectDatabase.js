const mongoose = require('mongoose');
require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

class Connection {
  constructor() {
    this.dataBaseConnectionMongoDB();
  }

  async dataBaseConnectionMongoDB() {
    await mongoose
      .connect(process.env.DATABASE)
      .then(() => {
        console.log('Connected to MongoDB');
      })
      .catch((error) => {
        console.log(`Connection failed to MongoDB error: ${error}`);
      });
  }

  async disconnect() {
    await mongoose.connection.close();
  }
}
module.exports = new Connection();
