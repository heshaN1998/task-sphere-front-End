import axios from "axios";
const AI_CHAT_URL = "http://localhost:8080/aichat";

export const sendAiMessage = async (message) => {
    const response = await axios.post(AI_CHAT_URL , {message: message});
    return response.data;
};