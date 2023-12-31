import { connect, connection } from 'mongoose';

const conn = {
  isConnected: false,
};

export const connectDB = async () => {
  if (conn.isConnected) return;

  const db = await connect('mongodb://localhost/nextmongocrud');
  console.log(db.connection.db.databaseName);
  conn.isConnected = db.connections[0].readyState;
};

connection.on('connected', () => {
  console.log('Mongoose connected');
});

connection.on('error', (err) => {
  console.log('Mongoose connection error', err);
});
