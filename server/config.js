import dotenv from "dotenv";
dotenv.config()

// import * as dotenv from "dotenv";
// dotenv.config()

// import 'dotenv/config';

export const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/postsdb'
export const PORT = process.env.PORT || 4000