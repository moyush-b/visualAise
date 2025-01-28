import mongoose from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: mongoose.Mongoose | null;
  promise: Promise<mongoose.Mongoose> | null;
}

// Extend the global object type to include mongoose
declare global {
  var mongoose: MongooseConnection | undefined;
}

const cached: MongooseConnection = globalThis.mongoose || { 
  conn: null, 
  promise: null 
};

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URL) throw new Error('Missing MONGODB_URL');

  cached.promise = cached.promise || 
    mongoose.connect(MONGODB_URL, { 
      dbName: 'imaginify', 
      bufferCommands: false 
    });

  cached.conn = await cached.promise;

  return cached.conn;
};
