import Axios from "axios";

export const NETWORK_ERROR = "NETWORK_ERROR"

const instance = Axios.create({
     //baseURL: "https://my-json-server.typicode.com/Evgeniy638/db_study_group_website"
     baseURL: "http://localhost:3004"
})

export default instance