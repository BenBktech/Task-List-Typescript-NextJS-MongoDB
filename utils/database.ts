import mongoose, { ConnectOptions } from 'mongoose';

let isConnected: boolean = false; // track the connection

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected) {
        console.log('MongoDB is already connected');
        return;
    }

    try {
        await mongoose
            .connect(
                process.env.MONGODB_URI!, {
                    dbName: "tasks",
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                }  as ConnectOptions
            )

        isConnected = true;

        console.log('MongoDB connected')
    } catch (error) {
        console.log(error);
    }
}