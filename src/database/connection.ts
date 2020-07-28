import {  createConnection } from 'typeorm';

createConnection()
  .then(() => console.log('Successfully connection with database'));