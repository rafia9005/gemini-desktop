import { ENV } from "@renderer/env";
import axios from "axios";

export const storeGemini = async () => {
  try {
   const response = await axios.post(`${ENV.API}${ENV.TOKEN}`)
  } catch (error) {

  }
}
