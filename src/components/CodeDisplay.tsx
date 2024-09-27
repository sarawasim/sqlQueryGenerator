import { useState } from "react"
import { ClipboardDocumentIcon } from "@heroicons/react/20/solid"

interface CodeDisplayProps {
  text: string
}

export default function CodeDisplay({ text }: CodeDisplayProps) {
  const [copied, setCopied] = useState(false)
  return (
    <div className="code-display w-[96%] m-[2%] h-[46%] rounded-xl bg-slate-900 overflow-y-scroll ">
      <div className="buttons w-full h-[35px] flex items-center pl-2 border border-slate-600 sticky top-0 bg-slate-900 justify-between ">
        <div className="flex">
          {" "}
          <div className="h-[12px] w-[12px] rounded-full m-1 bg-slate-400"></div>
          <div className="h-[12px] w-[12px] rounded-full m-1 bg-slate-400"></div>
          <div className="h-[12px] w-[12px] rounded-full m-1 bg-slate-400"></div>
        </div>
        {copied && (
          <p className="text-blue-300 z-10 text-xs bg-slate-600 py-0.5 px-2 rounded-md">
            Copied to clipboard!
          </p>
        )}
        <ClipboardDocumentIcon
          className="h-6 w-6 text-slate-400 top-0 right-0 m-2 mr-4 cursor-pointer"
          onClick={() => {
            navigator.clipboard.writeText(text)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
          }}
        />
      </div>

      <div className="code-output">
        <p className="text-blue-300 p-6 font-sans">{text}</p>
      </div>
    </div>
  )
}
