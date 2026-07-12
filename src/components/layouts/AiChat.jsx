// import {useContext,useState} from "react";
// import {ChatContext} from "../../context/ChatContext.jsx";
// import ChatMessage from "./ChatMessage.jsx";
// import "../../../src/components/aicss/aiChat.css";

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
//                                 if(e.key==="Enter" && !e.shiftKey){
//                                     e.preventDefault();
//                                 send();
//                                 }
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
import { useContext, useState } from "react";
import { ChatContext } from "../../context/ChatContext.jsx";
import ChatMessage from "./ChatMessage.jsx";

function AiChat() {

    const { messages, loading, askAI } = useContext(ChatContext);
    const [message, setMessage] = useState("");

    const send = () => {
        if (!message.trim()) return;

        askAI(message);
        setMessage("");
    };
    return (

        <div className="
            w-[420px]
            h-[650px]
            flex
            flex-col
            rounded-3xl
            overflow-hidden
            bg-white
            shadow-2xl
            border
            border-slate-200
        ">
           {/* AI Header */}

            <div className="
                bg-slate-900
                px-6
                py-5
                flex
                items-center
                gap-4
            ">
              <div className="
                    w-12
                    h-12
                    rounded-full
                    bg-blue-500
                    flex
                    items-center
                    justify-center
                    text-2xl
                    shadow-lg
                ">
                    🤖
                </div>


                <div>

                    <h2 className="
                        text-white
                        font-semibold
                        text-lg
                    ">
                        TaskSphere AI
                    </h2>

                    <p className="
                        text-slate-400
                        text-sm
                    ">
                        Your smart project assistant
                    </p>

                </div>


                <div className="
                    ml-auto
                    w-3
                    h-3
                    rounded-full
                    bg-green-400
                ">
                </div>


            </div>



            {/* Messages */}

            <div className="
                flex-1
                overflow-y-auto
                bg-slate-100
                p-5
                space-y-4
            ">
                {
                    messages.map((msg,index)=>(

                        <ChatMessage
                            key={index}
                            message={msg}
                        />

                    ))
                }
                {
                    loading &&

                    <div className="
                        flex
                        items-center
                        gap-2
                        text-slate-500
                        text-sm
                        bg-white
                        rounded-2xl
                        px-4
                        py-3
                        w-fit
                        shadow
                    ">

                        <span className="
                            animate-bounce
                        ">
                            ●
                        </span>

                        <span className="
                            animate-bounce
                            delay-150
                        ">
                            ●
                        </span>

                        <span className="
                            animate-bounce
                            delay-300
                        ">
                            ●
                        </span>

                    </div>

                }


            </div>
            {/* Input Area */}

            <div className="
                bg-white
                border-t
                p-4
                flex
                gap-3
            ">
                <input

                    value={message}

                    onChange={(e)=>setMessage(e.target.value)}

                    onKeyDown={(e)=>{

                        if(e.key==="Enter"){
                            send();
                        }

                    }}

                    placeholder="Ask AI about reports..."

                    className="
                        flex-1
                        rounded-2xl
                        bg-slate-100
                        px-4
                        py-3
                        text-sm
                        outline-none
                        focus:ring-2
                        focus:ring-blue-500
                    "

                />
                <button

                    onClick={send}

                    className="
                        rounded-2xl
                        bg-blue-600
                        px-5
                        text-white
                        font-medium
                        hover:bg-blue-700
                        active:scale-95
                        transition
                    "

                >

                    ➤

                </button>


            </div>


        </div>

    );

}


export default AiChat;