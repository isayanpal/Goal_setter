const express = require("express");
const colors = require('colors')
const { errorHandler } = require("./middlewares/errorMiddleware");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 5000;

const app = express();

connectDB()

const whitelist = ['http://localhost:3000']
const corsOptions = {
    origin: (origin, callback) => {
        if(!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials : true
}

// middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
