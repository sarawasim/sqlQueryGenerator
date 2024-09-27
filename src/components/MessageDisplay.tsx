interface UserMessage {
  role: string
  content: string
}

interface MessageDisplayProps {
  message: UserMessage
}

export default function MessageDisplay({ message }: MessageDisplayProps) {
  return (
    <div className="message-display w-full flex rounded-lg box-border bg-slate-100 my-3 mx-0 py-2 pl-4">
      <p className="py-0 pr-2">⊚</p>
      {/* <p>{message.role}</p> */}
      <p>{message.content}</p>
    </div>
  )
}
