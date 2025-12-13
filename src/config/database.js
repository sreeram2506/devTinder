const db = require('mongoose');
require('dotenv').config();
async function connectDatabase() {
    const DB_URI = process.env.DB_URI;
    console.log("Connecting to database at", DB_URI);
    try {
        const a = await db.connect(DB_URI)
        console.log("Database connected successfully!");
        return a;
    } catch (error) {
        console.error("Database connection failed:", error);
    }
}
    


module.exports = {
    connectDatabase
};