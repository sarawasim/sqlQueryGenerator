import MessageDisplay from "./MessageDisplay"

interface UserMessage {
  role: string
  content: string
}
interface MessagesDisplayProps {
  userMessages: UserMessage[]
}
export default function MessagesDisplay({
  userMessages,
}: MessagesDisplayProps) {
  return (
    <div className="messages-display w-[96%] m-[2%] h-[30%] overflow-y-scroll ">
      {userMessages.map((userMessage, index) => (
        <MessageDisplay key={index} message={userMessage} />
      ))}
    </div>
  )
}
