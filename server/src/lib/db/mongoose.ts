import mongoose from 'mongoose';

const mongoHost = process.env.MONGO_HOST;
const mongoPort = process.env.MONGO_PORT;
const mongoDBName = process.env.MONGO_DBNAME;

const connect = async (): Promise<undefined> => {
  try {
    await mongoose.connect(
      `mongodb://${mongoHost}:${mongoPort}/${mongoDBName}`,
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }
    );

    console.log(`Successfully connected to the database - ${mongoDBName}`);
  } catch (error) {
    console.log(`Error connecting to database: ${error}`);
    return process.exit(1);
  }
};

export default connect;
