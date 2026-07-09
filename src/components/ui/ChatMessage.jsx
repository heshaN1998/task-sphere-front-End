function ChatMessage({message}){
    return (
        //jsx mby ternery
        <div className={ message.role==="user"? "chat-message user": "chat-message assistant" }>
            {message.content}
         </div>
    );
}

export default ChatMessage;