import mongoose from 'mongoose'

const databaseConnection = async () => {

    try {
        const connectionString = process.env.MONGO_URI!;
        await mongoose.connect(connectionString);

        console.log('Successfully connected')

    }
    catch (error: any) {
        console.error(`Error: ${error}`);
        process.exit(1);
    }
}

export default databaseConnection;