
const mongoose = require("mongoose");
require('dotenv').config()
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useFindAndModify: true,
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit();
    }
};

module.exports = connectDB






















// const mongoose = require("mongoose")

// const connectDb = async () => {
//     try {
//         const conect = await mongoose.connect(process.env.MONGO_URL)


//         console.log(`mONGODB CONNECTED ${conect.connection.host}`)
//     }

//     catch (error) {
//         console.log(error.message)
//         process.exit()
//     }
// }

// module.exports = connectDb