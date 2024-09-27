interface ButtonProps {
  text: string
  onClick: () => void
  className?: string
}

export default function Button({
  text,
  onClick,
  className,
}: ButtonProps): JSX.Element {
  return (
    <>
      <button
        type="button"
        className={`inline-flex items-center gap-x-2 rounded-md px-8 py-1.5 text-sm font-semibold text-black border border-slate-400  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 uppercase ${className}`}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  )
}
