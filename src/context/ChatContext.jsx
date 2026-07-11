// import {createContext, useState} from "react";
// import {sendAiMessage} from "../api/aiChatApi.js.disabled";

// export const ChatContext = createContext();
// export const ChatProvider = ({children}) => {

// const [messages,setMessages] = useState([
//         {
//             role:"assistant",
//             content:
//             "Hello ♞🌌 I am TaskSphere AI Assistant. How can I help you?"
//         }
// ]);

// const [loading,setLoading] = useState(false);

// const askAI = async(message)=>{
//         setMessages(prev=>[
//             ...prev,
//             {
//                 role:"user",
//                 content:message
//             }
//         ]);

//         setLoading(true);
//         try{
//             const response =
//                 await sendAiMessage(message);

//             setMessages(prev=>[
//                 ...prev,
//                 {
//                     role:"assistant",
//                     content:response.answer
//                 }
//             ]);

//         }catch(error){
//             setMessages(prev=>[
//                 ...prev,
//                 {
//                     role:"assistant",
//                     content: "Sorry, AI service is not available."
//                 }
//             ]);
//         }
//         setLoading(false);
//         };

//     return(<ChatContext.Provider value={{ messages , loading , askAI }}> {children} </ChatContext.Provider>);
// };