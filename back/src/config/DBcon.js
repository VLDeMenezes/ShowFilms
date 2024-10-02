import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const DBcon = async () => {
  await mongoose.connect(
    "mongodb+srv://estudiodemenezes:Kb83xCdWw4s49Okw@cluster0.rvzffuh.mongodb.net/Movies?retryWrites=true&w=majority&appName=Cluster0"
  );
};

export { DBcon };
