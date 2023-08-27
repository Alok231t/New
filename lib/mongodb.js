import { MongoClient } from 'mongodb';

const uri =  "mongodb+srv://alokpriydarshi767:xTVMwYxjmogvauOh@cluster0.6adgq9d.mongodb.net/";



if (!uri) {
  throw new Error('Add MongoDB URI to environment variables');
}

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

const client = new MongoClient(uri, options);

async function connectMongoClient() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

// Automatically connect when this module is imported
connectMongoClient();

// Close the MongoDB connection when the process is terminated
process.on('SIGINT', async () => {
  try {
    await client.close();
    console.log('MongoDB connection closed');
    process.exit(0);
  } catch (error) {
    console.error('Error closing MongoDB connection:', error);
    process.exit(1);
  }
});

export default client;
