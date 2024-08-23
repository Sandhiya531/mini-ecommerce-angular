const express = require('express');
const app = express();
const cors = require('cors');

const dotenv = require('dotenv');
const path = require('path');
dotenv.config({path: path.join(__dirname, 'config', 'config.env')}) //__dirname is backend => backend/config/config.env
const connectDatabase = require('./config/connectDatabase')

connectDatabase();
const products = require('./routes/product');
const orders = require('./routes/order');

app.use(express.json());
app.use(cors());
app.use('/api/v1/', products);
app.use('/api/v1/', orders);

app.listen(process.env.PORT, () => {
    console.log(`Server running in port ${process.env.PORT} in ${process.env.NODE_ENV}`);

}); 