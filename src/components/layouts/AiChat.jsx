// import {useContext,useState} from "react";
// import {ChatContext} from "../../context/ChatContext.jsx.disabled";
// import Chatmessage from "./ChatMessage.jsx.disabled";
// import "../aicss/AiChat.css";


// function AiChat(){
//     const { messages,loading,askAI } = useContext(ChatContext);
//     const [message,setMessage] = useState("");
    
//     const send = ()=>{
//         if(message.trim()==="")
//             return;
//         askAI(message);
//         setMessage("");
    
//     };

//     return (
//             <div className="ai-chat-box">
//             <div className="ai-header">
//                 🤖 TaskSphere AI Assistant
//             </div>
//             <div className="ai-messages">
//                 {
//                     messages.map(
//                         (msg,index)=>( <ChatMessage key={index} message={msg} /> )
//                     )
//                 }
    
//                 {
//                     loading &&
//                     <div className="chat-message assistant">
//                         Thinking...
//                     </div>
//                 }
                
//                 </div>

//             <div className="ai-input">
//                 <input
//                     value={message}
//                     onChange={ e=>setMessage(e.target.value) }
//                     onKeyDown={ e=>{
//                                 if(e.key==="Enter")
//                                 send();
//                     }
//                     }

//             placeholder="Lets Seek Weekly reports..."
// />

//             <button onClick={send}> Send </button>
//         </div>
//     </div>

//     );


// }


// export default AiChat;