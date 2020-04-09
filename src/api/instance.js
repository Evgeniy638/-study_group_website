import Axios from "axios";

export const NETWORK_ERROR = "NETWORK_ERROR"

const instance = Axios.create({
     baseURL: "http://localhost:3004"
})

export default instance