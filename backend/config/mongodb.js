import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () =>
    console.log("Connection to MongoDB established! Welcome to CareConnect DB.")
  );
  await mongoose.connect(`${process.env.MONGODB_URI}`, {dbName:"careConnect"});
};

export default connectDB;