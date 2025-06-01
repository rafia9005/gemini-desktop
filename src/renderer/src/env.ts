import dotenv from "dotenv"
dotenv.config()
export const ENV = {
  TOKEN: process.env.TOKEN,
  API: process.env.API_URL
}
