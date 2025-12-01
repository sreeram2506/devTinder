const db = require('mongoose');

async function connectDatabase() {
    const DB_URI = 'mongodb+srv://sreeramchenchukumar_db_user:passworddevTinder@namastenode.hlxnlyt.mongodb.net/devtinder';
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