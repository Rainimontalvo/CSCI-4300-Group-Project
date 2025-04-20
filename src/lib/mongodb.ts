import mongoose from 'mongoose';

interface ConnectionCache {
  conn: mongoose.Connection | null;
  promise: Promise<mongoose.Connection> | null;
}

declare global {
  var mongooseCache: ConnectionCache | undefined;
}

const globalCache = global.mongooseCache || { conn: null, promise: null };
if (!global.mongooseCache) global.mongooseCache = globalCache;

if (!process.env.MONGODB_URI) {
  throw new Error('please set up MONGODB_URI environment variable');
}
const MONGODB_URI = process.env.MONGODB_URI;

async function connectToDatabase(): Promise<mongoose.Connection> {
  if (globalCache.conn) {
    return globalCache.conn;
  }

  if (globalCache.promise) {
    return (await globalCache.promise);
  }

  const promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
    return mongoose.connection;
  });
  
  globalCache.promise = promise;
  
  try {
    const conn = await promise;
    globalCache.conn = conn;
    return conn;
  } catch (error) {
    globalCache.promise = null;
    throw error;
  }
}

export default connectToDatabase;
