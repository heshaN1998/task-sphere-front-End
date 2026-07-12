import axiosClient from "../api/axiosClient.js";
const AI_CHAT_URL = "http://localhost:8082/aichat";

export const sendAiMessage = async (message) => {
    const response = await axiosClient.post(AI_CHAT_URL , {message: message});
    return response.data;
};

