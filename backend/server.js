const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');

dotenv.config();

const app = express();


app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🌍 Server running on http://localhost:${PORT}`);
});
