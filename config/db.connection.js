/* SECTION: External modules */
const mongoose = require("mongoose");

/*NOTE: Set up connection string */
const connectionStr = process.env.MONGO_URI || 'mongodb://localhost:s7017/instapostr';

/* NOTE: Connect to the database */
mongoose.connect(connectionStr, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
});

/* SECTION: Test the connection */
mongoose.connection.on("connected", () => {
    console.log(`\x1b[36m%s\x1b[0m`, `[${new Date().toLocaleTimeString()}] - MongoDB connected ... 🙌 🙌 🙌`);
    
});

mongoose.connection.on("error", () => {
    console.log('\x1b[31m%s\x1b[0m', 'MongoDB connection error 😥', error);
});

mongoose.connection.on("disconnected", () => {
    console.log('\x1b[33m%s\x1b[0m', 'MongoDB disconnected  ⚡️ 🔌 ⚡️');
});