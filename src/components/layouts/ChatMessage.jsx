// function ChatMessage({message}){
//     return (
//         //jsx mby ternery
//         <div className={ message.role==="user"? "chat-message user": "chat-message assistant" }>
//             {message.content}
//          </div>
//     );
// }

// export default ChatMessage;
function ChatMessage({message}) {

    const user = message.role === "user";


    return (

        <div className={`
            flex
            ${user ? "justify-end" : "justify-start"}
            gap-2
        `}>


            {!user && (

                <div className="
                    w-8
                    h-8
                    rounded-full
                    bg-blue-600
                    flex
                    items-center
                    justify-center
                    text-white
                    text-sm
                ">
                    🤖
                </div>

            )}



            <div className={`
                max-w-[75%]
                px-4
                py-3
                rounded-2xl
                text-sm
                shadow-sm

                ${
                    user
                    ?
                    "bg-blue-600 text-white rounded-br-none"
                    :
                    "bg-white text-slate-700 border rounded-bl-none"
                }

            `}>

                {message.content}

            </div>



        </div>

    );

}


export default ChatMessage;