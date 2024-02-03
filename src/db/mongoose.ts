import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        // const connectURL = "mongodb+srv://anuragrdhote:jvKBSYhNHMbznVd3@papersynccluster.abvia50.mongodb.net/?retryWrites=true&w=majority"
        const connectURL = "mongodb://127.0.0.1:27017/paper-sync"
        await mongoose.connect(connectURL)
        console.log("MongoDB successfully connected!");
    } catch (error: any) {
        console.log(error.message);
    }
}