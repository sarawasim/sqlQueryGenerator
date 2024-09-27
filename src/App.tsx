import { useState } from "react"
import Button from "./components/Button"
import CodeDisplay from "./components/CodeDisplay"
import MessagesDisplay from "./components/MessagesDisplay"
import Loading from "./components/Loading"

interface ChatData {
  role: string
  content: string
}

function App() {
  const [value, setValue] = useState<string>("")
  const [chat, setChat] = useState<ChatData[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function getQuery(this: any) {
    setIsLoading(true)
    const options: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: value,
      }),
    }
    try {
      const response = await fetch("http://localhost:8000/completions", options)
      const data: ChatData = await response.json()
      const userMessage = {
        role: "user",
        content: value,
      }
      setChat((oldChat) => [...oldChat, data, userMessage])
      setValue("")
      setIsLoading(false)
    } catch (error) {
      console.error(error)
      setIsLoading(false)
    }
  }

  const filteredUserMessages = chat.filter((message) => message.role === "user")
  const latestCode = chat
    .filter((message) => message.role === "assistant")
    .pop()

  function clearChat() {
    setValue("")
    setChat([])
  }
  return (
    <div className="app font-sometype bg-white shadow-md rounded-xl flex flex-col justify-center">
      <div className="m-[2%] text-center">
        <h1 className="text-3xl p-2 px-4 bg-slate-200 inline-block rounded-xl">
          SQL Query Generator
        </h1>
      </div>
      <MessagesDisplay userMessages={filteredUserMessages} />
      <div className="flex justify-center h-8">{isLoading && <Loading />}</div>
      <input
        className="border border-slate-300 rounded-lg flex box-border p-4 m-[2%]"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && value && !isLoading) {
            getQuery()
          }
        }}
      />
      <CodeDisplay text={latestCode?.content || ""} />
      <div className="mx-[2%] mb-[2%] flex justify-end">
        <Button
          text={"Get Query"}
          onClick={getQuery}
          className="bg-slate-800 text-white hover:bg-slate-700 border-none rounded-l-lg rounded-r-none w-34"
        />
        <Button
          text={"Clear Chat"}
          onClick={clearChat}
          className="rounded-r-lg rounded-l-none hover:bg-slate-200 w-34"
        />
      </div>
    </div>
  )
}

export default App
